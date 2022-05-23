import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

const main = async () => {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });
  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: {
      prisma,
    },
  });
  await apolloServer.start();
  const app = express();
  apolloServer.applyMiddleware({ app });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(
      `Apollo Server up and running at http://localhost:${PORT}/graphql`
    );
  });
};

main();
