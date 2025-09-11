# Portal Media - Development Guide

## 🏗️ Project Architecture

This project follows a standard React app structure with an integrated API backend.

### Project Structure

```
PortalMedia/
├── src/                  # React Source Code
│   ├── components/       # UI Components
│   ├── contexts/         # React Contexts
│   ├── hooks/            # Custom Hooks
│   ├── i18n/             # Internationalization
│   ├── pages/            # Route Components
│   └── ...
├── Public/               # Static Assets
├── api/                  # Express Backend
│   ├── server.js         # API server
│   ├── package.json      # Backend dependencies
│   └── .env              # Backend secrets (secure)
├── package.json          # Frontend dependencies & scripts
├── vite.config.ts        # Vite configuration
└── README.md             # Documentation
```

## 🚀 Development Workflow

### Single Command Development

```bash
# Start frontend development server
npm run dev

# Start backend API server
npm run server

# Start both (requires concurrently installation)
npm run dev:full
```

This runs:

- **Frontend**: http://localhost:5173 (Vite Dev Server)
- **Backend**: http://localhost:3001 (Express API)

### Individual Development

```bash
# Frontend only
npm run dev

# Backend only
npm run server
```

## 🔐 Security Configuration

### Credential Separation

- **Backend** (`api/.env`): Contains PayPal secret (secure)
- **Frontend** (`.env.local`): Contains only client ID (safe)

### Git Protection

```gitignore
# Protects both environments
api/.env              # Secret credentials
.env.local            # Frontend environment variables
```

## 📂 Component Organization

### Frontend (`/src`)

- All React/TypeScript files contained
- Independent dependency management
- Clean development environment

### Backend (`/api`)

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
npm install              # Install frontend dependencies
cd api && npm install    # Install backend dependencies

# Development
npm run dev              # Start frontend only
npm run server           # Start backend only
npm run dev:full         # Start both servers

# Production
npm run build            # Build frontend for production

# Maintenance
npm run lint             # Lint frontend
cd api && npm run lint   # Lint backend
```

## 📋 Development Checklist

### Initial Setup

- [x] Project structure organized
- [x] Dependencies separated
- [x] Environment variables secured
- [x] Git protection configured
- [x] Documentation updated

### Daily Development

1. **Start Development**: `npm run dev` (frontend) or `npm run dev:full` (both)
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

1. Code changes in `src/` → Frontend hot reload
2. Code changes in `api/server.js` → Nodemon auto-restart
3. Environment changes → Restart both servers

### Production Deployment

- **Frontend**: Build static files with `npm run build`
- **Backend**: Deploy Node.js server with environment variables
- **Database**: Add database configuration if needed

---

**Professional development environment for scalable applications** 🚀
