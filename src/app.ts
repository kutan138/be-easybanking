import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import indexRouter from "./routes/index";
import deserializeUser from "./middleware/deserializeUser";

const app = express();

const allowedOrigins = ["http://localhost:3000"];
const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(corsOptions));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(deserializeUser);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

export default app;
