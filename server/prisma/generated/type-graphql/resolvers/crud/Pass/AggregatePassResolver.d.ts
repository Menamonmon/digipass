import { GraphQLResolveInfo } from "graphql";
import { AggregatePassArgs } from "./args/AggregatePassArgs";
import { AggregatePass } from "../../outputs/AggregatePass";
export declare class AggregatePassResolver {
    aggregatePass(ctx: any, info: GraphQLResolveInfo, args: AggregatePassArgs): Promise<AggregatePass>;
}
