import type { Request, Response, NextFunction } from "express";
import { submitContactService } from "../services/contact.service";
import { contactSchema } from "../validations/contact.validation";
import { apiResponse } from "../utils/apiResponse";
import { ApiError } from "../utils/apiError";

export const submitContactController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      throw new ApiError(400, firstIssue.message);
    }

    const result = await submitContactService(parsed.data);

    res
      .status(200)
      .json(
        apiResponse("Message sent successfully. I'll be in touch soon!", result)
      );
  } catch (error) {
    next(error);
  }
};
