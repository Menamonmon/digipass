import { GraphQLResolveInfo } from "graphql";
import { FindFirstPassArgs } from "./args/FindFirstPassArgs";
import { Pass } from "../../../models/Pass";
export declare class FindFirstPassResolver {
    findFirstPass(ctx: any, info: GraphQLResolveInfo, args: FindFirstPassArgs): Promise<Pass | null>;
}
