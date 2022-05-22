import { GraphQLResolveInfo } from "graphql";
import { DeletePassArgs } from "./args/DeletePassArgs";
import { Pass } from "../../../models/Pass";
export declare class DeletePassResolver {
    deletePass(ctx: any, info: GraphQLResolveInfo, args: DeletePassArgs): Promise<Pass | null>;
}
