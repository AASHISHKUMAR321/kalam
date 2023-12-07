import Server from "./server";
import Database from "./database/db";
import { MONGODB_URI } from "./config/env.config";

const database = new Database(MONGODB_URI ?? "");
const server = new Server();

database
  .connect()
  .then(() => server.start())
  .catch((err) => console.log(`unable to start server${err}`));
