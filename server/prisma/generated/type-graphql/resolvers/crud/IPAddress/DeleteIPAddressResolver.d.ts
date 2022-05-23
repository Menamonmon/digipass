import { GraphQLResolveInfo } from "graphql";
import { DeleteIPAddressArgs } from "./args/DeleteIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class DeleteIPAddressResolver {
    deleteIPAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteIPAddressArgs): Promise<IPAddress | null>;
}
