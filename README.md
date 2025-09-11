# Portal Media - Full Stack Application

## Project Overview

Portal Media is a modern, full-stack web application featuring a React frontend with TypeScript and an Express.js backend. The application includes secure PayPal integration, multi-language support, and responsive design.

## 🏗️ **PROJECT STRUCTURE**

```
PortalMedia/
├── frontend/                 # React TypeScript Frontend
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── contexts/        # React Contexts
│   │   ├── hooks/          # Custom Hooks
│   │   ├── i18n/           # Internationalization
│   │   ├── pages/          # Route Components
│   │   └── ...
│   ├── Public/             # Static Assets
│   ├── package.json        # Frontend Dependencies
│   ├── vite.config.ts     # Vite Configuration
│   ├── .env.local         # Frontend Environment Variables
│   └── README.md          # Frontend Documentation
│
├── backend/                 # Express.js Backend
│   ├── server.js           # Main Server File
│   ├── package.json        # Backend Dependencies
│   ├── .env               # Backend Environment Variables (Secret)
│   ├── .env.template      # Environment Template
│   └── README.md          # Backend Documentation
│
├── package.json            # Root Package Manager
├── .gitignore             # Git Ignore Rules
└── README.md              # This File
```

## 🚀 **Quick Start**

### Prerequisites

- Node.js 16+
- npm

### 1. Install All Dependencies

```bash
npm run install:all
```

### 2. Configure Environment Variables

**Backend Setup:**

```bash
cd backend
cp .env.template .env
# Edit .env with your PayPal credentials
```

**Frontend Setup:**

```bash
cd frontend
cp .env.local.template .env.local
# Edit .env.local with your PayPal client ID
```

### 3. Start Development Servers

```bash
# Run both servers simultaneously
npm run dev

# Or run separately:
npm run dev:backend    # Backend on http://localhost:3001
npm run dev:frontend   # Frontend on http://localhost:5173
```

## 🔐 **Security Architecture**

### Secure Credential Management

```
Frontend (React) - PUBLIC ZONE
├── ✅ Uses VITE_PAYPAL_CLIENT_ID only
├── ✅ No access to secret key
├── ✅ Dynamic PayPal SDK loading
└── ✅ Communicates with backend via API

Backend (Express) - SECURE ZONE
├── 🔒 Uses PAYPAL_CLIENT_SECRET (protected)
├── 🔒 Handles all PayPal API authentication
├── 🔒 Never exposes secret to frontend
└── 🔒 Environment variables protected by .gitignore
```

### Security Features

- **Separated Concerns**: Frontend and backend credentials isolated
- **Git Protection**: All `.env` files excluded from version control
- **API Proxy**: Secure backend endpoints for sensitive operations
- **Dynamic Loading**: No hardcoded credentials in source code

## 🎯 **Key Features**

### Frontend Features

- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🌍 Multi-language support (Arabic/English)
- 💳 Secure PayPal checkout integration
- 📱 Fully responsive design
- ✨ Framer Motion animations
- 💬 Interactive chatbot
- 🔝 Scroll to top functionality

### Backend Features

- 🚀 Express.js API server
- 🔒 Secure PayPal integration
- 🌐 CORS configured
- 📝 Comprehensive error handling
- 🏥 Health check endpoints

## 📋 **Available Scripts**

### Root Level Commands

```bash
npm run install:all    # Install all dependencies (root, frontend, backend)
npm run dev           # Start both servers
npm run dev:frontend  # Start only frontend
npm run dev:backend   # Start only backend
npm run build         # Build frontend for production
npm run lint          # Lint both projects
npm run clean         # Clean all node_modules and build files
```

### Individual Project Commands

See `frontend/README.md` and `backend/README.md` for specific documentation.

## 🌐 **Development URLs**

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Payment Page**: http://localhost:5173/payment

## 📚 **Documentation**

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [Development Guide](./DEVELOPMENT_GUIDE.md)

## 🔧 **Development Workflow**

1. **Setup**: Run `npm run install:all` once
2. **Environment**: Configure `.env` files in both directories
3. **Development**: Use `npm run dev` to start both servers
4. **Testing**: Test PayPal integration in sandbox mode
5. **Build**: Use `npm run build` for production

## 🛡️ **Security Best Practices**

- Never commit `.env` files
- Keep secret keys only in backend
- Use environment templates for setup
- Regularly rotate API credentials
- Test in sandbox before production

## 📦 **Technology Stack**

### Frontend

- React 18.3.1 + TypeScript 5.5.3
- Vite 5.4.2 (Build tool)
- Tailwind CSS 3.4.1 (Styling)
- Framer Motion 12.23.12 (Animations)
- i18next (Internationalization)

### Backend

- Node.js + Express.js 4.19.2
- PayPal REST API Integration
- CORS 2.8.5 (Cross-origin requests)
- dotenv 16.4.5 (Environment management)

## 🚀 **Deployment**

- **Frontend**: Build with `npm run build` and deploy static assets
- **Backend**: Deploy Node.js server with environment variables
- **Environment**: Use production PayPal credentials in live environment

---

**Portal Media** - Modern, Secure, Scalable Web Application
