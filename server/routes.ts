import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Ping endpoint to keep Render.com free tier awake
  app.get('/ping', (_req, res) => {
    res.json({ 
      status: 'ok', 
      timestamp: Date.now(),
      message: 'Server is alive'
    });
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
