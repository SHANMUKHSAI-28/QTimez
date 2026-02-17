import type { Request, Response } from "express";
import express from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register your API routes
await registerRoutes(httpServer, app);

// Export handler for Vercel serverless functions
export default app;
