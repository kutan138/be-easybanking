import express from "express";
import api from "../api";

const router = express();
router.use("/", api);

export default router;
