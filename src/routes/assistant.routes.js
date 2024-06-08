import { Router } from "express";
import { assistantDetails, createAssistant, deleteAssistant, updateAssistant } from "../controllers/assistant.controller.js";

const assistantRoutes = Router()

assistantRoutes.route("/").post(createAssistant)
assistantRoutes.route("/:id").get(assistantDetails)
assistantRoutes.route("/:id").delete(deleteAssistant)
assistantRoutes.route("/:id").put(updateAssistant)

export default assistantRoutes