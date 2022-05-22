import { GraphQLResolveInfo } from "graphql";
import { UpdateManyIPAddressArgs } from "./args/UpdateManyIPAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyIPAddressResolver {
    updateManyIPAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIPAddressArgs): Promise<AffectedRowsOutput>;
}
