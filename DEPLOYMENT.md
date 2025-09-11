# Production Deployment Guide

## ✅ **Pre-deployment Checklist**

### 1. Environment Variables

- **Frontend (.env.local):**

  ```
  VITE_PAYPAL_CLIENT_ID=your_paypal_client_id_here
  VITE_PAYPAL_MODE=production
  ```

- **Backend (api/.env):**
  ```
  PAYPAL_CLIENT_ID=your_paypal_client_id_here
  PAYPAL_CLIENT_SECRET=your_paypal_secret_key_here
  PAYPAL_MODE=live
  PORT=3001
  ```

### 2. Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build (optional)
npm run preview
```

### 3. Deployment Platforms

#### **Vercel (Frontend)**

1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard:
   - `VITE_PAYPAL_CLIENT_ID`
   - `VITE_PAYPAL_MODE=production`
3. Deploy automatically on push

#### **Railway/Heroku (Backend API)**

1. Deploy the `/api` folder as a separate service
2. Set environment variables:
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
   - `PAYPAL_MODE=live`
   - `PORT=3001`

### 4. Security Notes

- ✅ Only `VITE_PAYPAL_CLIENT_ID` is exposed to frontend (safe)
- 🔒 `PAYPAL_CLIENT_SECRET` stays on backend only
- 🔒 All sensitive data in backend environment variables

## 🚀 **Quick Deployment**

### Option 1: Static Frontend Only

```bash
npm run build
# Deploy /dist folder to Netlify, Vercel, etc.
```

### Option 2: Full Stack

1. **Frontend**: Deploy to Vercel/Netlify
2. **Backend**: Deploy to Railway/Heroku
3. **Update API URLs**: Point frontend to your backend URL

## 🛠️ **Fixed Issues**

- ✅ Removed conflicting rollup dependency
- ✅ Environment variables properly configured
- ✅ Build process optimized for production
- ✅ Secure credential separation maintained
