import { GraphQLResolveInfo } from "graphql";
import { CreateManyPassArgs } from "./args/CreateManyPassArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPassResolver {
    createManyPass(ctx: any, info: GraphQLResolveInfo, args: CreateManyPassArgs): Promise<AffectedRowsOutput>;
}
