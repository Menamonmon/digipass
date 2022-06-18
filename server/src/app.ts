import { authChecker } from "./auth/auth-checker";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authResolvers } from "./auth/resolvers";
import dotenv from "dotenv";
import { expressjwt } from "express-jwt";
import { passesResolvers } from "./passes/resolvers";

dotenv.config();

const main = async () => {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(
    expressjwt({
      secret: process.env.JWT_SECRET,
      algorithms: ["HS256"],
      credentialsRequired: false,
    })
  );

  // For JWT error handling
  app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      req.auth = null;
    }
    next();
  });

  const prisma = new PrismaClient();
  await prisma.$connect();

  const schema = await buildSchema({
    resolvers: [, ...authResolvers, ...passesResolvers],
    validate: false,
    authChecker,
  });
  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req }: { req: any }) => {
      const user = req.auth || null;
      return { prisma, user };
    },
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(
      `Apollo Server up and running at http://localhost:${PORT}/graphql`
    );
  });
};

main();
