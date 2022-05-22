import { GraphQLResolveInfo } from "graphql";
import { AggregatePassArgs } from "./args/AggregatePassArgs";
import { CreateManyPassArgs } from "./args/CreateManyPassArgs";
import { CreatePassArgs } from "./args/CreatePassArgs";
import { DeleteManyPassArgs } from "./args/DeleteManyPassArgs";
import { DeletePassArgs } from "./args/DeletePassArgs";
import { FindFirstPassArgs } from "./args/FindFirstPassArgs";
import { FindManyPassArgs } from "./args/FindManyPassArgs";
import { FindUniquePassArgs } from "./args/FindUniquePassArgs";
import { GroupByPassArgs } from "./args/GroupByPassArgs";
import { UpdateManyPassArgs } from "./args/UpdateManyPassArgs";
import { UpdatePassArgs } from "./args/UpdatePassArgs";
import { UpsertPassArgs } from "./args/UpsertPassArgs";
import { Pass } from "../../../models/Pass";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePass } from "../../outputs/AggregatePass";
import { PassGroupBy } from "../../outputs/PassGroupBy";
export declare class PassCrudResolver {
    pass(ctx: any, info: GraphQLResolveInfo, args: FindUniquePassArgs): Promise<Pass | null>;
    findFirstPass(ctx: any, info: GraphQLResolveInfo, args: FindFirstPassArgs): Promise<Pass | null>;
    passes(ctx: any, info: GraphQLResolveInfo, args: FindManyPassArgs): Promise<Pass[]>;
    createPass(ctx: any, info: GraphQLResolveInfo, args: CreatePassArgs): Promise<Pass>;
    createManyPass(ctx: any, info: GraphQLResolveInfo, args: CreateManyPassArgs): Promise<AffectedRowsOutput>;
    deletePass(ctx: any, info: GraphQLResolveInfo, args: DeletePassArgs): Promise<Pass | null>;
    updatePass(ctx: any, info: GraphQLResolveInfo, args: UpdatePassArgs): Promise<Pass | null>;
    deleteManyPass(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPassArgs): Promise<AffectedRowsOutput>;
    updateManyPass(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPassArgs): Promise<AffectedRowsOutput>;
    upsertPass(ctx: any, info: GraphQLResolveInfo, args: UpsertPassArgs): Promise<Pass>;
    aggregatePass(ctx: any, info: GraphQLResolveInfo, args: AggregatePassArgs): Promise<AggregatePass>;
    groupByPass(ctx: any, info: GraphQLResolveInfo, args: GroupByPassArgs): Promise<PassGroupBy[]>;
}
