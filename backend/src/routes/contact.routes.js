import express from "express";
import { contactController } from "../controller/contact.controller.js";
import { contactValidation } from "../middleware/validation.middleware.js";
const router = express.Router()

router.post("/", contactValidation, contactController)

export default router;