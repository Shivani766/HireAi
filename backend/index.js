import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import aiRoute from "./routes/ai.route.js";

// ✅ Load env correctly
dotenv.config();

const app = express();


/// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
};

app.use(cors(corsOption));

const PORT = process.env.PORT || 4000;

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/ai", aiRoute);

// Start server safely
let server;

const startServer = async () => {
  try {
    await connectDB();

    // Create HTTP server with reuse address option
    server = http.createServer(app);
    
    // Enable SO_REUSEADDR to allow rapid restarts
    server.on("listening", () => {
      const address = server.address();
      console.log(`Server running at port ${address.port}`);
    });

    server.setMaxListeners(0);
    
    // Track all connections for cleanup
    const connections = new Set();
    
    server.on("connection", (conn) => {
      connections.add(conn);
      conn.on("close", () => {
        connections.delete(conn);
      });
      // Auto-close idle connections
      conn.setTimeout(30000);
    });

    // Listen with SO_REUSEADDR
    const options = { host: "0.0.0.0", port: PORT };
    server.listen(options, () => {
      // Listening event handler
    });

    // Handle port already in use error
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Exiting...`);
        process.exit(1);
      } else {
        console.error("Server error:", err.message);
        process.exit(1);
      }
    });

    // Graceful shutdown with immediate cleanup
    const gracefulShutdown = () => {
      console.log("Shutdown signal received. Closing server...");
      
      // Stop accepting new connections
      server.close(() => {
        console.log("Server closed.");
        process.exit(0);
      });
      
      // Force close all connections immediately
      connections.forEach((conn) => {
        conn.destroy();
      });
      
      // Force exit after 2 seconds
      setTimeout(() => {
        console.error("Forced shutdown after timeout");
        process.exit(1);
      }, 2000);
    };

    process.on("SIGTERM", gracefulShutdown);
    process.on("SIGINT", gracefulShutdown);

  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();

