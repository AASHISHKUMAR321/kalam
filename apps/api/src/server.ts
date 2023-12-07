import express, { Express } from "express";
import { PORT } from "./config/env.config";
import { json, urlencoded } from "body-parser";
import mainRoute from "./routes/main";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

class Server {
  private app: Express;
  private port: number | string;

  constructor() {
    this.app = express();
    this.port = PORT || 3000;
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.disabled("x-powered-by");
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cookieParser());
  }
  setupRoutes() {
    this.app.use("/", mainRoute);
  }
  start() {
    this.app.listen(this.port, () => {
      console.log(`server is running on ${this.port}`);
    });
  }
}

export default Server;
