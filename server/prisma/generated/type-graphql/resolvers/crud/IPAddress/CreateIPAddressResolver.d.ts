import { GraphQLResolveInfo } from "graphql";
import { CreateIPAddressArgs } from "./args/CreateIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class CreateIPAddressResolver {
    createIPAddress(ctx: any, info: GraphQLResolveInfo, args: CreateIPAddressArgs): Promise<IPAddress>;
}
