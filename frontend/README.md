# Portal Media Frontend

## Overview

Modern React web application with TypeScript, featuring multi-language support, PayPal integration, and responsive design.

## Features

- React 18 with TypeScript
- Tailwind CSS for styling
- Multi-language support (Arabic/English)
- Secure PayPal checkout integration
- Fully responsive design
- Framer Motion animations
- Vite for fast development
- Interactive chatbot
- Scroll to top functionality

## Setup

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
npm install
```

### Environment Configuration

Copy `.env.local.template` to `.env.local` and configure:

```bash
cp .env.local.template .env.local
```

Edit `.env.local`:

```env
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id_here
VITE_PAYPAL_MODE=sandbox
```

### Development

```bash
npm run dev
```

The application will start on http://localhost:5173

### Build for Production

```bash
npm run build
```

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/         # React contexts (Language)
│   ├── hooks/           # Custom hooks
│   ├── i18n/           # Internationalization
│   ├── pages/          # Route components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── Public/             # Static assets
├── index.html          # HTML template
├── package.json        # Frontend dependencies
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## Key Components

### PayPal Integration

- `PayPalButton.tsx` - Secure PayPal checkout component
- Dynamic SDK loading via environment variables
- Secure order processing through backend API

### Multi-language Support

- Arabic and English support
- RTL layout handling
- Flag-based language switcher

### Responsive Design

- Mobile-first approach
- Burger menu for mobile navigation
- Optimized for all screen sizes

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Security Notes

- Only client ID exposed to frontend (safe)
- All sensitive operations handled by backend
- Environment variables properly scoped with VITE\_ prefix
