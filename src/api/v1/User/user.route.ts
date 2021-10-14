import express from "express";
import { createUserHandler } from "./user.controller";
import { createUserSchema } from "./user.schema";
import { requiresUser, validateRequest } from "../../../middleware";

const router = express.Router();

router
  .route("/")
  .get(createUserHandler)
  // Create a post
  .post([requiresUser, validateRequest(createUserSchema)], createUserHandler);

export default router;
