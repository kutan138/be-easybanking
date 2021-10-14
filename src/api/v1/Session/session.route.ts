import express from "express";
import { requiresUser, validateRequest } from "../../../middleware";
import { createUserSessionSchema } from "./session.schema";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
} from "./session.controller";
const router = express.Router();

router
  .route("/")
  .get(requiresUser, getUserSessionsHandler)
  // Create a post
  .post(validateRequest(createUserSessionSchema), createUserSessionHandler);

export default router;
