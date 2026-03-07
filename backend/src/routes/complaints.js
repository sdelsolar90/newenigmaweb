import { Router } from "express";
import { submitComplaint } from "../controllers/complaintsController.js";
import { verifyRecaptcha } from "../recaptcha.js";

const router = Router();

router.post("/", verifyRecaptcha, submitComplaint);

export default router;
