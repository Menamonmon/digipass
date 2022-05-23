import { GraphQLResolveInfo } from "graphql";
import { FindUniqueIPAddressArgs } from "./args/FindUniqueIPAddressArgs";
import { IPAddress } from "../../../models/IPAddress";
export declare class FindUniqueIPAddressResolver {
    iPAddress(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIPAddressArgs): Promise<IPAddress | null>;
}
