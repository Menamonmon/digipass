import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPassArgs } from "./args/UpdateManyPassArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPassResolver {
    updateManyPass(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPassArgs): Promise<AffectedRowsOutput>;
}
