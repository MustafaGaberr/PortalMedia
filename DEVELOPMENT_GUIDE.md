# Portal Media - Development Guide

## 🏗️ Project Architecture

This project follows a modern monorepo structure with clear separation between frontend and backend components.

### Project Structure

```
PortalMedia/
├── frontend/              # React TypeScript Frontend
│   ├── src/              # Source code
│   ├── Public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.ts    # Vite configuration
│   └── .env.local        # Frontend environment
│
├── backend/               # Express Backend
│   ├── server.js         # API server
│   ├── package.json      # Backend dependencies
│   └── .env              # Backend secrets (secure)
│
├── package.json          # Root orchestrator
└── README.md             # Documentation
```

## 🚀 Development Workflow

### Single Command Development

```bash
# Start both frontend and backend simultaneously
npm run dev
```

This command runs:

- **Backend**: http://localhost:3001 (Express API)
- **Frontend**: http://localhost:5173 (Vite Dev Server)

### Individual Development

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

## 🔐 Security Configuration

### Credential Separation

- **Backend** (`backend/.env`): Contains PayPal secret (secure)
- **Frontend** (`frontend/.env.local`): Contains only client ID (safe)

### Git Protection

```gitignore
# Protects both environments
backend/.env           # Secret credentials
frontend/.env*         # Frontend environment variables
```

## 📂 Component Organization

### Frontend (`/frontend`)

- All React/TypeScript files contained
- Independent dependency management
- Separate build configuration
- Clean development environment

### Backend (`/backend`)

- API server isolated
- Secure credential management
- Independent deployment
- Clean server environment

### Root (`/`)

- Project orchestration
- Combined development scripts
- Unified documentation
- Git configuration

## 🛠️ Available Commands

```bash
# Setup (one time)
npm run install:all     # Install all dependencies

# Development
npm run dev            # Start both servers
npm run dev:frontend   # Start React app only
npm run dev:backend    # Start API server only

# Production
npm run build          # Build frontend for production

# Maintenance
npm run lint           # Lint both projects
npm run clean          # Clean all build files
```

## 📋 Development Checklist

### Initial Setup

- [x] Project structure organized
- [x] Dependencies separated
- [x] Environment variables secured
- [x] Git protection configured
- [x] Documentation updated

### Daily Development

1. **Start Development**: `npm run dev`
2. **Frontend**: http://localhost:5173
3. **Backend API**: http://localhost:3001
4. **Test PayPal**: Navigate to `/payment`

### Before Deployment

1. **Build**: `npm run build`
2. **Test**: Verify all features work
3. **Environment**: Configure production variables
4. **Deploy**: Frontend static files + Backend server

## 🎯 Architecture Benefits

### Code Organization

- **Separation of Concerns**: Frontend/Backend clearly separated
- **Independent Dependencies**: Each project manages its own packages
- **Clean Structure**: Logical file organization
- **Scalable Architecture**: Easy to add new features

### Security Enhancements

- **Credential Isolation**: Secrets only in backend
- **Git Protection**: All sensitive files excluded
- **Environment Separation**: Clear distinction between public/private config
- **Development Safety**: Prevents accidental exposure of secrets

### Developer Experience

- **Single Command**: Start entire stack with `npm run dev`
- **Clear Documentation**: Each project has its own README
- **Type Safety**: TypeScript properly configured
- **Hot Reload**: Both frontend and backend support live reloading

## 🚨 Important Notes

### Environment Files

- **DO NOT** commit `.env` files to Git
- **USE** template files for new developers
- **VERIFY** `.gitignore` excludes all environment files

### Development Flow

1. Code changes in `frontend/src/` → Frontend hot reload
2. Code changes in `backend/server.js` → Manual restart needed
3. Environment changes → Restart both servers

### Production Deployment

- **Frontend**: Build static files with `npm run build`
- **Backend**: Deploy Node.js server with environment variables
- **Database**: Add database configuration if needed

---

**Professional development environment for scalable applications** 🚀
