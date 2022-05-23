import { GraphQLResolveInfo } from "graphql";
import { UpdatePassArgs } from "./args/UpdatePassArgs";
import { Pass } from "../../../models/Pass";
export declare class UpdatePassResolver {
    updatePass(ctx: any, info: GraphQLResolveInfo, args: UpdatePassArgs): Promise<Pass | null>;
}
