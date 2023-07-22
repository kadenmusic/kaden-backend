import { Request, Response } from "express";

const cool = require("cool-ascii-faces");
const express = require("express");
const path = require("path");
const { Pool } = require("pg");
// const DATABASE_URL = 'postgres://username:password@localhost:5435/database-name?sslmode=disable';

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

const PORT = process.env.PORT || 8080;
// const HOST = '0.0.0.0';

express()
  .use(express.static(path.join(__dirname, "../public")))
  .set("views", path.join(__dirname, "../views"))
  .set("view engine", "ejs")
  .get("/", (req: Request, res: Response) => res.render("pages/index"))
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
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
