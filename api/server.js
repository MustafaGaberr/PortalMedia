import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// PayPal configuration
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || 'live';
const PAYPAL_API_BASE = 'https://api-m.paypal.com'; // Live mode only

// Function to get PayPal access token
async function getAccessToken() {
    try {
        const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');

        const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
        });

        if (!response.ok) {
            throw new Error(`Failed to get access token: ${response.status}`);
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error getting PayPal access token:', error);
        throw error;
    }
}

// Create order endpoint
app.post('/api/create-order', async (req, res) => {
    try {
        const { amount, currency = 'USD' } = req.body;

        // Validate input
        if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            return res.status(400).json({
                error: 'Invalid amount provided'
            });
        }

        // Get access token
        const accessToken = await getAccessToken();

        // Create order payload
        const orderPayload = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    reference_id: `ORDER-${Date.now()}`,
                    amount: {
                        currency_code: currency,
                        value: parseFloat(amount).toFixed(2),
                    },
                    description: 'Portal Media Services Payment',
                },
            ],
            application_context: {
                brand_name: 'Portal Media',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: 'https://portalmedia.com/payment/success',
                cancel_url: 'https://portalmedia.com/payment/cancel',
            },
        };

        // Create order with PayPal
        const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderPayload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('PayPal API Error:', errorData);
            throw new Error(`PayPal API Error: ${response.status}`);
        }

        const orderData = await response.json();

        console.log('Order created successfully:', orderData.id);

        res.status(200).json({
            id: orderData.id,
            status: orderData.status,
            links: orderData.links,
        });

    } catch (error) {
        console.error('Error creating PayPal order:', error);
        res.status(500).json({
            error: 'Failed to create order',
            message: error.message
        });
    }
});

// Capture payment endpoint (optional - can also be done from frontend)
app.post('/api/capture-order/:orderID', async (req, res) => {
    try {
        const { orderID } = req.params;

        if (!orderID) {
            return res.status(400).json({ error: 'Order ID is required' });
        }

        // Get access token
        const accessToken = await getAccessToken();

        // Capture the order
        const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('PayPal Capture Error:', errorData);
            throw new Error(`PayPal Capture Error: ${response.status}`);
        }

        const captureData = await response.json();

        console.log('Payment captured successfully:', captureData.id);

        res.status(200).json(captureData);

    } catch (error) {
        console.error('Error capturing PayPal payment:', error);
        res.status(500).json({
            error: 'Failed to capture payment',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        paypalMode: PAYPAL_MODE
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server Error:', error);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 PayPal Payment Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔧 PayPal Mode: ${PAYPAL_MODE} (Live Only)`);
    console.log(`💳 Create Order: http://localhost:${PORT}/api/create-order`);

    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
        console.warn('⚠️  Warning: PayPal credentials not found in environment variables');
    } else {
        console.log('✅ PayPal Live Mode Configuration Loaded');
    }
});