import { Router } from "express";
import { submitLead } from "../controllers/leadsController.js";
import { verifyRecaptcha } from "../recaptcha.js";

const router = Router();

router.post("/", verifyRecaptcha, submitLead);

export default router;
