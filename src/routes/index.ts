import { Router } from "express";
import contactRoutes from "./contact.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});

router.use("/contact", contactRoutes);

export default router;
