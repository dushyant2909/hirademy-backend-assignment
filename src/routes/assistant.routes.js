import { Router } from "express";
import { assistantDetails, createAssistant } from "../controllers/assistant.controller.js";

const assistantRoutes = Router()

assistantRoutes.route("/").post(createAssistant)
assistantRoutes.route("/:id").get(assistantDetails)

export default assistantRoutes