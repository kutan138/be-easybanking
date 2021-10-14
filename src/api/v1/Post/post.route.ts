import express from "express";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  updatePostHandler,
} from "./post.controller";
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from "./post.schema";
import { requiresUser, validateRequest } from "../../../middleware";

const router = express.Router();

router
  .route("/")
  .get(createPostHandler)
  // Create a post
  .post([requiresUser, validateRequest(createPostSchema)], createPostHandler);

// link: api/v1/post/:postId
router
  .route("/:postId")
  // Get a post
  .get(getPostHandler)
  // Update a post
  .put([requiresUser, validateRequest(updatePostSchema)], updatePostHandler)
  // Delete a post
  .delete([requiresUser, validateRequest(deletePostSchema)], deletePostHandler);

export default router;
