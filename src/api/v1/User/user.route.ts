import express from "express";
import { createUserHandler } from "./user.controller";
import { createUserSchema } from "./user.schema";
import { validateRequest, requiresUser } from "../../../middleware";
import { findUserById } from "./user.service";

const router = express.Router();

router
  .route("/")
  // Register user
  .post([validateRequest(createUserSchema)], createUserHandler);

router.route("/:id").get([requiresUser], findUserById);

export default router;
