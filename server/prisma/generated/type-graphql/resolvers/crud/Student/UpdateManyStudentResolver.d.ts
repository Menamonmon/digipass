import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStudentArgs } from "./args/UpdateManyStudentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStudentResolver {
    updateManyStudent(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStudentArgs): Promise<AffectedRowsOutput>;
}
