import { GraphQLResolveInfo } from "graphql";
import { UpsertIPAddressArgs } from "./args/UpsertIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class UpsertIPAddressResolver {
    upsertIPAddress(ctx: any, info: GraphQLResolveInfo, args: UpsertIPAddressArgs): Promise<IPAddress>;
}
