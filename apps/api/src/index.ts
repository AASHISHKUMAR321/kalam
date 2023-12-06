// import { createServer } from "./server";
// import { log } from "@repo/logger";

import Server from "./server";

// const port = process.env.PORT || 3001;
// const server = createServer();

// server.listen(port, () => {
//   log(`api running on ${port}`);
// });

// import { createServer } from "./server";
// import { log } from "@repo/logger";

// const port = process.env.PORT || 3001;
// const server = createServer();

// server.listen(port, () => {
//   log(`api running on ${port}`);
// });

const server = new Server();

server.start();
