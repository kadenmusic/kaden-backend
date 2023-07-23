"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cool = require("cool-ascii-faces");
const express = require("express");
const path = require("path");
const { Pool } = require("pg");
// const DATABASE_URL = 'postgres://username:password@localhost:5435/database-name?sslmode=disable';
const pool = new Pool({
    connectionString: process.env.DATABASE_URL ||
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
    .get("/", (req, res) => res.render("pages/index"))
    .get("/cool", (req, res) => res.send(cool()))
    .get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield pool.connect();
        const result = yield client.query("SELECT * FROM test_table");
        const results = { results: result ? result.rows : null };
        res.render("pages/db", results);
        client.release();
    }
    catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
}))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
