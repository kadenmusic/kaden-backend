import { Request, Response } from "express";
import express from "express";
import path from "path";
import pg from "pg";
import Queue from "bull";
import * as Sentry from "@sentry/node";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const { Pool } = pg;
const __dirname = path.resolve();

Sentry.init({
  dsn: process.env.SENTRY_DSN || "",
  tracesSampleRate: 1.0,
});

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

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

const srcPath = path.join(__dirname, "src");

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

const app = express()
  .use(express.static(path.join(srcPath, "public")))
  .use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server),
  )
  .set("views", path.join(srcPath, "views"))
  .set("view engine", "ejs")
  .get("/", (req: Request, res: Response) => res.render("pages/index"))
  .get("/client.js", (req: Request, res: Response) =>
    res.sendFile("client.js", { root: "./src/public" }),
  )
  .get(
    "/.well-known/apple-app-site-association",
    (req: Request, res: Response) =>
      res.sendFile("apple-app-site-association", { root: "./src/public" }),
  )
  .get("/--/spotify-auth-callback", (req: Request, res: Response) =>
    res.send(200),
  )
  .get("/db", async (req: Request, res: Response) => {
    // const transaction = Sentry.startTransaction({
    //   op: "test",
    //   name: "My First Test Transaction",
    // });

    // setTimeout(() => {
    //   try {
    //     throw new Error("This is a test error");
    //   } catch (e) {
    //     Sentry.captureException(e);
    //   } finally {
    //     transaction.finish();
    //   }
    // }, 99);

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
