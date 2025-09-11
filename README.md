# Portal Media Frontend

# Portal Media

Modern React web application with TypeScript, featuring multi-language support, PayPal integration, and responsive design.

## Features

- React 18 with TypeScript
- Multi-language support (Arabic/English)
- PayPal payment integration
- Responsive design with Tailwind CSS
- Interactive chatbot
- Framer Motion animations
- Express.js API backend

## Quick Start

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
npm install
cd api && npm install
```

### Environment Setup

**Frontend (.env.local):**

```bash
cp .env.local.template .env.local
# Edit with your PayPal client ID
```

**Backend (api/.env):**

```bash
cp api/.env.template api/.env
# Edit with your PayPal credentials
```

### Development

```bash
# Start frontend only
npm run dev

# Start backend only
npm run server

# Start both (requires concurrently installation)
npm run dev:full
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## Project Structure

```
PortalMedia/
├── src/                     # React Source Code
│   ├── components/          # UI Components
│   ├── contexts/            # React Contexts
│   ├── hooks/               # Custom Hooks
│   ├── i18n/                # Internationalization
│   ├── pages/               # Route Components
│   └── ...
├── Public/                  # Static Assets
├── api/                     # Express.js Backend
│   ├── server.js            # Main Server File
│   ├── package.json         # Backend Dependencies
│   ├── .env                 # Backend Environment Variables (Secret)
│   └── .env.template        # Environment Template
├── package.json             # Frontend Dependencies & Scripts
├── vite.config.ts           # Vite Configuration
├── tailwind.config.js       # Tailwind Configuration
├── .gitignore               # Git Ignore Rules
└── README.md                # This File
```

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run server` - Start backend API server
- `npm run dev:full` - Start both frontend and backend

## Technology Stack

### Frontend

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- i18next (internationalization)
- React Router DOM (routing)

### Backend

- Node.js + Express.js
- PayPal REST API integration
- CORS enabled
- Environment variable management

## Security

- PayPal credentials properly separated
- Client ID safe for frontend exposure
- Secret key secure in backend only
- Environment templates for safe setup
