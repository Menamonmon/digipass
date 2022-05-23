import { GraphQLResolveInfo } from "graphql";
import { DeleteManyIPAddressArgs } from "./args/DeleteManyIPAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyIPAddressResolver {
    deleteManyIPAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIPAddressArgs): Promise<AffectedRowsOutput>;
}
