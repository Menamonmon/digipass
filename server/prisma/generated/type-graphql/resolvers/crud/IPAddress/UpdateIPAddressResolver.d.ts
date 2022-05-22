import { GraphQLResolveInfo } from "graphql";
import { UpdateIPAddressArgs } from "./args/UpdateIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class UpdateIPAddressResolver {
    updateIPAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateIPAddressArgs): Promise<IPAddress | null>;
}
