# Security Configuration

## PayPal Credentials Security

### ✅ Secure Implementation

This project correctly implements PayPal security best practices:

1. **Client ID** - Safe to expose in frontend

   - Located in: `.env` (frontend)
   - Environment variable: `VITE_PAYPAL_CLIENT_ID`
   - Value: `AVxvJihkm9g5iQWUMlhBNCCu1rKxKL5dkM2VsOuPRBgnsMXM2du4UZks1AAxruY5D7yfjhpUYwtubhY8`

2. **Client Secret** - NEVER exposed to frontend
   - Located in: `api/.env` (backend only)
   - Environment variable: `PAYPAL_CLIENT_SECRET`
   - Value: `EME0Q8lJVH1cQS2lIrnuimu1vWvrKdhz8eSq2Mmp3CJD2kfRX1NXPrzxpg7qUyLMIyVCg1oHdcsNQh13`

### 🔒 Security Measures

- ✅ Secret key is backend-only
- ✅ All PayPal API calls requiring secret are server-side
- ✅ Frontend only receives Client ID (public information)
- ✅ Order creation and capture handled on secure backend
- ✅ Live mode enabled for production payments

### ⚠️ Important Security Notes

1. **NEVER commit .env files** to version control
2. **Secret key should NEVER be exposed** in frontend code
3. **Client ID is safe to expose** and needed for PayPal SDK
4. **All payment processing happens server-side** for security

### 🚨 Credential Management

**If credentials are ever compromised:**

1. Immediately revoke credentials in PayPal Developer Console
2. Generate new credentials
3. Update environment files
4. Restart all services

### 📁 File Structure

```
├── .env                 # Frontend env (Client ID only)
├── api/
│   └── .env            # Backend env (Client ID + Secret)
├── src/components/
│   └── PayPalButton.tsx # Frontend PayPal integration
└── api/
    └── server.js       # Backend PayPal API handlers
```

### 🔧 Environment Variables

**Frontend (.env):**

```
VITE_PAYPAL_CLIENT_ID=AVxvJihkm9g5iQWUMlhBNCCu1rKxKL5dkM2VsOuPRBgnsMXM2du4UZks1AAxruY5D7yfjhpUYwtubhY8
```

**Backend (api/.env):**

```
PAYPAL_CLIENT_ID=AVxvJihkm9g5iQWUMlhBNCCu1rKxKL5dkM2VsOuPRBgnsMXM2du4UZks1AAxruY5D7yfjhpUYwtubhY8
PAYPAL_CLIENT_SECRET=EME0Q8lJVH1cQS2lIrnuimu1vWvrKdhz8eSq2Mmp3CJD2kfRX1NXPrzxpg7qUyLMIyVCg1oHdcsNQh13
PAYPAL_MODE=live
```
