import { GraphQLResolveInfo } from "graphql";
import { CreateManyIPAddressArgs } from "./args/CreateManyIPAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyIPAddressResolver {
    createManyIPAddress(ctx: any, info: GraphQLResolveInfo, args: CreateManyIPAddressArgs): Promise<AffectedRowsOutput>;
}
