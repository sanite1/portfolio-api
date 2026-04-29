# Portfolio API

The backend service powering the contact form on my personal portfolio. A small but production-grade Node.js + Express API built in TypeScript, featuring email delivery via Nodemailer (Gmail SMTP), input validation with Zod, rate limiting, and a clean layered architecture.

**Frontend repo:** [link to your frontend repo]

---

## Overview

When a visitor submits the contact form on my portfolio, this API:

1. Validates the incoming payload (name, email, message)
2. Rate limits the request (max 5 submissions per IP per hour)
3. Sends a notification email to me with the sender's details
4. Sends an auto-reply confirmation to the sender

The codebase follows a layered architecture (interface → validation → service → controller → route) with a consistent response shape across the API.

## Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **Nodemailer** with Gmail SMTP for email delivery
- **Zod** for input validation
- **express-rate-limit** for IP-based rate limiting
- **CORS** for controlled cross-origin access
- **dotenv** for environment configuration

## Project Structure

src/
├── config/ # Environment loader, Nodemailer transporter
├── controllers/ # Request handlers
├── interfaces/ # TypeScript interfaces (payloads, mail options)
├── middlewares/ # Error handler, rate limiter
├── routes/ # Express routers
├── services/ # Business logic (mail service, contact service)
├── templates/ # HTML email templates (notification + auto-reply)
├── types/ # Type aliases
├── utils/ # Response formatter, ApiError class
├── validations/ # Zod schemas
├── app.ts # Express app setup
└── server.ts # Entry point

## API Endpoints

### Health check

GET /api/v1/health

Returns 200 with a timestamp confirming the API is alive.

### Submit contact form

POST /api/v1/contact

**Request body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "message": "Hey Collins, I'd like to discuss a project..."
}
```

**Validation rules:**

- `name`: 2–100 characters
- `email`: valid email, max 150 characters
- `message`: 10–2000 characters

**Success response (200):**

```json
{
  "success": true,
  "message": "Message sent successfully. I'll be in touch soon!",
  "data": {
    "submittedAt": "2025-04-29T14:32:11.123Z"
  }
}
```

**Error response (400 / 429 / 500):**

```json
{
  "success": false,
  "message": "Descriptive error here"
}
```

**Rate limit:** 5 submissions per IP per hour. Exceeding the limit returns a 429.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm
- A Gmail account with **2-Step Verification enabled** and an **App Password generated**

### Installation

```bash
git clone <your-repo-url>
cd portfolio-api
npm install
```

### Environment Variables

Copy the example file and fill it in:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_char_gmail_app_password
RECIPIENT_EMAIL=where_to_send_messages@gmail.com
SENDER_NAME=Portfolio

### How to get a Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (required)
3. Visit [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate a new password labeled "Portfolio API"
5. Use the generated 16-character password as `SMTP_PASS` (no spaces)

### Run the development server

```bash
npm run dev
```

The API will start on `http://localhost:4000`.

You should see:
✓ Mail transporter ready
✓ Server running on http://localhost:4000

### Build for production

```bash
npm run build
npm start
```

## Testing the contact endpoint

With the server running, in a separate terminal:

```bash
curl -X POST http://localhost:4000/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message to verify the API works correctly."}'
```

You should receive a `200` JSON response, plus a notification email at the address set in `RECIPIENT_EMAIL` and an auto-reply at the address provided in the payload.

## Architecture Notes

- **Consistent response shape** — every endpoint returns `{ success, message, data? }` so frontend handling is uniform.
- **Layered separation** — controllers handle HTTP concerns only; services contain business logic; templates contain presentation. Email sending is abstracted behind `mail.service.ts`, so swapping providers later is a one-file change.
- **Validation at the edge** — Zod schemas run before any business logic, returning the first issue with a 400.
- **Fail-soft auto-reply** — if the auto-reply email fails, the notification email still sends and the request still succeeds. The user shouldn't be punished for our auto-reply provider hiccuping.
- **Rate limiting** — 5 requests per IP per hour, with `trust proxy` enabled so it works correctly behind reverse proxies (Render, Vercel, etc.).

## Deployment

This API is designed to be deployed to any Node.js host. Recommended: **Render** (free tier handles this workload comfortably).

When deploying:

1. Set all environment variables in your host's dashboard
2. Set `NODE_ENV=production`
3. Set `FRONTEND_URL` to your deployed frontend URL
4. Build command: `npm run build`
5. Start command: `npm start`

## License

Open source and free to fork as a reference.

## Author

**Collins Sanni**

- Email: csanni52@gmail.com
- Location: Abuja, Nigeria

---

_Built as part of my personal portfolio project._
