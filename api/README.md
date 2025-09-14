# Portal Media Backend

## Overview

Express.js API server with PayPal integration for secure payment processing.

## Features

- Secure PayPal order creation and capture
- CORS enabled for frontend communication
- Environment-based configuration
- Comprehensive error handling
- Health check endpoint

## Setup

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
npm install
```

### Environment Configuration

Copy `.env.template` to `.env` and configure your PayPal credentials:

```bash
cp .env.template .env
```

Edit `.env`:

```env
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_secret_key_here
PAYPAL_MODE=live
```

### Development

```bash
npm run dev
```

The server will start on http://localhost:3001

## API Endpoints

### Health Check

```
GET /api/health
```

### Create PayPal Order

```
POST /api/create-order
Content-Type: application/json

{
  "amount": "20.00",
  "currency": "USD"
}
```

### Capture PayPal Payment

```
POST /api/capture-order/:orderID
```

## Security

- All PayPal credentials stored in `.env` (excluded from Git)
- CORS configured for frontend origin
- Input validation on all endpoints
- Secure PayPal API integration

## Project Structure

```
backend/
├── server.js          # Main Express server
├── package.json       # Backend dependencies
├── .env              # Environment variables (not in Git)
├── .env.template     # Environment template
└── README.md         # This file
```
