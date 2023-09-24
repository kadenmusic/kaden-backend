import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import * as Sentry from "@sentry/node";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import pg from "pg";
import { resolvers } from "./lib/graphql/resolvers/my-resolver.js";
import { typeDefs } from "./lib/graphql/schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";
const { Pool } = pg;

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

Sentry.init({
  dsn: process.env.SENTRY_DSN || "",
  tracesSampleRate: 1.0,
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// await server.start();
// const { url } = await startStandaloneServer(server);

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || "";

    // try to retrieve a user with the token
    // const user = getUser(token);
    const user = {};

    // optionally block the user
    // we could also check user roles/permissions here
    // if (!user)
    //   // throwing a `GraphQLError` here allows us to specify an HTTP status code,
    //   // standard `Error`s will have a 500 status code by default
    //   throw new GraphQLError("User is not authenticated", {
    //     extensions: {
    //       code: "UNAUTHENTICATED",
    //       http: { status: 401 },
    //     },
    //   });

    // add the user to the context
    return { user };
  },
});

console.log(`🚀 GraphQL Server listening at: ${url}`);

const app: Express = express();

app.use(express.json());
app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server),
);
app.get(
  "/.well-known/apple-app-site-association",
  (req: Request, res: Response) =>
    res.sendFile("apple-app-site-association", { root: "./src/public" }),
);

export default app;
