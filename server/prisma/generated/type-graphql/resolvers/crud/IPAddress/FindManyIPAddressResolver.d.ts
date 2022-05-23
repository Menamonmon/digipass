import { GraphQLResolveInfo } from "graphql";
import { FindManyIPAddressArgs } from "./args/FindManyIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class FindManyIPAddressResolver {
    iPAddresses(ctx: any, info: GraphQLResolveInfo, args: FindManyIPAddressArgs): Promise<IPAddress[]>;
}
