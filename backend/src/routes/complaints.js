import { Router } from "express";
import { submitComplaint } from "../controllers/complaintsController.js";

const router = Router();

router.post("/", submitComplaint);

export default router;
