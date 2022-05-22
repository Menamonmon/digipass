import { GraphQLResolveInfo } from "graphql";
import { AggregateIPAddressArgs } from "./args/AggregateIPAddressArgs";
import { AggregateIPAddress } from "../../outputs/AggregateIPAddress";
export declare class AggregateIPAddressResolver {
    aggregateIPAddress(ctx: any, info: GraphQLResolveInfo, args: AggregateIPAddressArgs): Promise<AggregateIPAddress>;
}
