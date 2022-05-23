import { GraphQLResolveInfo } from "graphql";
import { FindManyPassArgs } from "./args/FindManyPassArgs";
import { Pass } from "../../../models/Pass";
export declare class FindManyPassResolver {
    passes(ctx: any, info: GraphQLResolveInfo, args: FindManyPassArgs): Promise<Pass[]>;
}
