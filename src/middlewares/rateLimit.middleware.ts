import rateLimit from "express-rate-limit";

export const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 submissions per IP per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many submissions from this IP. Please try again in an hour or email me directly.",
  },
});
