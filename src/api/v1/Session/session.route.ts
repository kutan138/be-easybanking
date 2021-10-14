import express from "express";
import { requiresUser, validateRequest } from "../../../middleware";
import { createUserSessionSchema } from "./session.schema";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./session.controller";
const router = express.Router();

router
  .route("/")
  // Get the user's sessions
  .get(requiresUser, getUserSessionsHandler)
  // Login
  .post(validateRequest(createUserSessionSchema), createUserSessionHandler)
  // Logout
  .delete(requiresUser, invalidateUserSessionHandler);

export default router;
