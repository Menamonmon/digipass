import { GraphQLResolveInfo } from "graphql";
import { FindUniquePassArgs } from "./args/FindUniquePassArgs";
import { Pass } from "../../../models/Pass";
export declare class FindUniquePassResolver {
    pass(ctx: any, info: GraphQLResolveInfo, args: FindUniquePassArgs): Promise<Pass | null>;
}
