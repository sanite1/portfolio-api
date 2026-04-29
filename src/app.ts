import express, { type Application } from "express";
import cors from "cors";
import { env } from "./config/env";
import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";

const app: Application = express();

// Trust proxy (needed for rate limiting when deployed behind a proxy like Render/Vercel)
app.set("trust proxy", 1);

// Middleware
app.use(
  cors({
    origin: [env.frontendUrl, "http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// Routes
app.use("/api/v1", routes);

// 404 + Error handler (must come last)
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
