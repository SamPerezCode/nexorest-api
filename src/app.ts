import express from "express";

import { notFound } from "./middlewares/not-found";
import { apiRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.use(notFound);

export { app };
