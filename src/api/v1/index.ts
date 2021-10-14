import express from "express";
import session from "./Session/session.route";
import user from "./User/user.route";
import post from "./Post/post.route";

const router = express();

router.use("/sessions", session);
router.use("/user", user);
router.use("/post", post);

export default router;
