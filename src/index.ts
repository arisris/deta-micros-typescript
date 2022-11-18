import express from "express";
import path from "path";

import authRouter from "./routes/auth";

const app = express();

app.use("/auth", authRouter);

app.use(express.static(path.join(process.cwd(), "public")));

export { app };
