import express from "express";
import { config } from "dotenv";
import router from "./routes/user.js";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
config({
  path: "./data/config.env",
});

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.send("WORKING");
});

app.use("/api/v1/user", router);

app.use(errorMiddleware);
