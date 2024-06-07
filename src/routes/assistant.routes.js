import { Router } from "express";
import { createAssistant } from "../controllers/assistant.controller.js";

const assistantRoutes = Router()

assistantRoutes.route("/").post(createAssistant)


export default assistantRoutes