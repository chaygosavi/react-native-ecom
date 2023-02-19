import express from "express";
import { config } from "dotenv";
import router from "./routes/user.js";
config({
  path: "./data/config.env",
});

export const app = express();

app.use("/api/v1", router);
