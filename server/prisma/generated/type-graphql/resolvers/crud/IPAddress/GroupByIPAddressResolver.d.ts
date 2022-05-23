import { GraphQLResolveInfo } from "graphql";
import { GroupByIPAddressArgs } from "./args/GroupByIPAddressArgs";
import { IPAddressGroupBy } from "../../outputs/IPAddressGroupBy";
export declare class GroupByIPAddressResolver {
    groupByIPAddress(ctx: any, info: GraphQLResolveInfo, args: GroupByIPAddressArgs): Promise<IPAddressGroupBy[]>;
}
