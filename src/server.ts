import Queue from "bull";
import app from "./app.js";

const PORT = process.env.PORT || 8080;
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6380";

const workQueue = new Queue("work", REDIS_URL);

workQueue.on("global:completed", (jobId: any, result: any) => {
  console.log(`Job completed with result ${result}`);
});

app.listen(PORT, () => console.log(`🚀 Node Server listening on ${PORT}`));

// For later...
//
// const transaction = Sentry.startTransaction({
//   op: "test",
//   name: "My First Test Transaction",
// });
