import { Router } from "express";
import { submitContactController } from "../controllers/contact.controller";
import { contactRateLimiter } from "../middlewares/rateLimit.middleware";

const router = Router();

router.post("/", contactRateLimiter, submitContactController);

export default router;
