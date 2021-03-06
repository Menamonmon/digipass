import { authChecker } from "./../auth/auth-checker";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { authResolvers } from "../auth/resolvers";
import { classroomsResolvers } from "../classrooms/resolvers";
import { passesResolvers } from "../passes/resolvers";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { Express } from "express";

export default async (app: Express) => {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const schema = await buildSchema({
    resolvers: [, ...authResolvers, ...classroomsResolvers, ...passesResolvers],
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
};
