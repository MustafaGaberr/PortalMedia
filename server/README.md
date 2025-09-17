# Portal Media Backend Server

This is the backend server for Portal Media website, handling contact form submissions and email notifications.

## Features

- Contact form API endpoint (`/api/contact`)
- Email notifications using Nodemailer
- CORS enabled for frontend communication
- Environment variable configuration
- Production-ready Express server

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file:

```bash
cp env.example .env
```

3. Configure environment variables:

```
PORT=5000
EMAIL_PASS=your_gmail_app_password_here
```

4. Start the server:

```bash
# Development
npm run dev

# Production
npm start
```

## Environment Variables

- `PORT`: Server port (default: 5000)
- `EMAIL_PASS`: Gmail App Password for sending emails

## API Endpoints

### POST /api/contact

Submit contact form data.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## Email Configuration

The server uses Gmail SMTP with App Password authentication. Make sure to:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password for the application
3. Use the App Password in the `EMAIL_PASS` environment variable

## Deployment

1. Build the React frontend:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

The server will serve the React app and handle API requests.
