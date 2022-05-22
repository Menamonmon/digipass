import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPassArgs } from "./args/DeleteManyPassArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPassResolver {
    deleteManyPass(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPassArgs): Promise<AffectedRowsOutput>;
}
