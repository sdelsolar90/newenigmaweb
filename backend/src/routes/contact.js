import { Router } from "express";
import { submitContact } from "../controllers/contactController.js";
import { verifyRecaptcha } from "../recaptcha.js";

const router = Router();

router.post("/", verifyRecaptcha, submitContact);

export default router;
