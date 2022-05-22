import { GraphQLResolveInfo } from "graphql";
import { CreatePassArgs } from "./args/CreatePassArgs";
import { Pass } from "../../../models/Pass";
export declare class CreatePassResolver {
    createPass(ctx: any, info: GraphQLResolveInfo, args: CreatePassArgs): Promise<Pass>;
}
