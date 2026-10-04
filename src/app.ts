import express from "express";

import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

app.use("/v1/user", userRoutes);

app.use(errorHandler);

export default app;
