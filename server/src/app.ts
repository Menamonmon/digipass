import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authResolvers } from "./auth/resolvers";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    const schema = await buildSchema({
        resolvers: [...resolvers, ...authResolvers],
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
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());

    apolloServer.applyMiddleware({ app });

    const PORT = 4000;

    app.listen(PORT, () => {
        console.log(
            `Apollo Server up and running at http://localhost:${PORT}/graphql`
        );
    });
};

main();
