import dotenv from "dotenv";
import express from "express";
import type { Application, Request, Response, NextFunction } from "express";

import connectDb from "./db";

dotenv.config();

connectDb();

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
