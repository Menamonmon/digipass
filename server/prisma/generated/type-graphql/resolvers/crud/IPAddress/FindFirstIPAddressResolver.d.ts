import { GraphQLResolveInfo } from "graphql";
import { FindFirstIPAddressArgs } from "./args/FindFirstIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class FindFirstIPAddressResolver {
    findFirstIPAddress(ctx: any, info: GraphQLResolveInfo, args: FindFirstIPAddressArgs): Promise<IPAddress | null>;
}
