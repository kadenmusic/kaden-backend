import { Request, Response } from "express";

const cool = require("cool-ascii-faces");
const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const Queue = require("bull");

const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6380";
const PORT = process.env.PORT || 8080;

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://username:password@localhost:5435/database-name?sslmode=disable",
  ssl: process.env.DATABASE_URL
    ? {
        rejectUnauthorized: false,
      }
    : false,
});

// Create / Connect to a named work queue
const workQueue = new Queue("work", REDIS_URL);

const app = express()
  .use(express.static(path.join(__dirname, "../src/public")))
  .set("views", path.join(__dirname, "../views"))
  .set("view engine", "ejs")
  .get("/", (req: Request, res: Response) => res.render("pages/index"))
  .get("/client.js", (req: Request, res: Response) =>
    res.sendFile("client.js", { root: "./src/public" }),
  )
  .get("/jobs", async (req: Request, res: Response) =>
    res.sendFile("jobs.html", { root: "./src/public" }),
  )
  .post("/job", async (req: Request, res: Response) => {
    // This would be where you could pass arguments to the job
    // Ex: workQueue.add({ url: 'https://www.heroku.com' })
    // Docs: https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd
    const job = await workQueue.add();
    res.json({ id: job.id });
  })
  .get("/job/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const job = await workQueue.getJob(id);

    if (job === null) {
      res.status(404).end();
    } else {
      const state = await job.getState();
      const progress = job._progress;
      const reason = job.failedReason;
      res.json({ id, state, progress, reason });
    }
  })
  .get("/cool", (req: Request, res: Response) => res.send(cool()))
  .get("/db", async (req: Request, res: Response) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM test_table");
      const results = { results: result ? result.rows : null };
      res.render("pages/db", results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });

workQueue.on("global:completed", (jobId: any, result: any) => {
  console.log(`Job completed with result ${result}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
