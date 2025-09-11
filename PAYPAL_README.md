# PayPal Integration Setup

## Overview

This project integrates PayPal Checkout with a React frontend and Express.js backend for secure payment processing.

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Environment Setup

The `.env` file is already configured with your PayPal sandbox credentials:

- Client ID: `AeCvHACihWBeWnz1iyB5WW58Z7vqWU0JwfDh2rE8J7cg3fsQIPauBXD3zx_SLQKlxIZjxsVF9uFZVr7i`
- Secret: `EA2FxguEuHZfF5qAVVmg9Q_jUHbO18ehtSclzkoDR9v1sBpecjv4FVtyK1igv7k_wlh-YTuVyhUzN6rE`
- Mode: `sandbox` (for testing)

### Running the Application

#### Option 1: Run Frontend and Backend Simultaneously

```bash
npm run dev:all
```

#### Option 2: Run Separately

```bash
# Terminal 1 - Backend server
npm run server

# Terminal 2 - Frontend development server
npm run dev
```

### URLs

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- Payment Page: http://localhost:5173/payment

## PayPal Integration Features

### Frontend (`src/components/PayPalButton.tsx`)

- PayPal JavaScript SDK integration
- Real-time payment status updates
- Error handling and user feedback
- Responsive design with Tailwind CSS
- TypeScript support

### Backend (`server.js`)

- Express.js server with PayPal REST API integration
- Secure credential handling via environment variables
- Order creation endpoint: `POST /api/create-order`
- Payment capture endpoint: `POST /api/capture-order/:orderID`
- CORS enabled for frontend communication

### Security Features

- PayPal credentials stored securely in backend
- No sensitive data exposed to frontend
- HTTPS API calls to PayPal servers
- Error handling and validation

## Payment Flow

1. User enters amount and selects PayPal
2. Frontend requests order creation from backend
3. Backend creates PayPal order and returns order ID
4. PayPal button renders with order ID
5. User completes payment on PayPal
6. Payment is captured via backend
7. Success confirmation displayed to user

## Testing

- Uses PayPal sandbox environment
- Test with sandbox PayPal accounts
- No real money transactions

## API Endpoints

### POST /api/create-order

Creates a new PayPal order

```json
{
  "amount": "20.00",
  "currency": "USD"
}
```

### POST /api/capture-order/:orderID

Captures payment for an existing order

### GET /api/health

Health check endpoint

## Troubleshooting

- Ensure both frontend and backend are running
- Check console for error messages
- Verify PayPal credentials in .env file
- Test with sandbox PayPal accounts only
