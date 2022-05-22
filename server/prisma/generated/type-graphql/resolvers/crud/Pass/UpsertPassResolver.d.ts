import { GraphQLResolveInfo } from "graphql";
import { UpsertPassArgs } from "./args/UpsertPassArgs";
import { Pass } from "../../../models/Pass";
export declare class UpsertPassResolver {
    upsertPass(ctx: any, info: GraphQLResolveInfo, args: UpsertPassArgs): Promise<Pass>;
}
