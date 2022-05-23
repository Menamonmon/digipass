import { GraphQLResolveInfo } from "graphql";
import { GroupByPassArgs } from "./args/GroupByPassArgs";
import { PassGroupBy } from "../../outputs/PassGroupBy";
export declare class GroupByPassResolver {
    groupByPass(ctx: any, info: GraphQLResolveInfo, args: GroupByPassArgs): Promise<PassGroupBy[]>;
}
