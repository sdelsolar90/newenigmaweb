import { Router } from "express";
import { submitLead } from "../controllers/leadsController.js";

const router = Router();

router.post("/", submitLead);

export default router;
