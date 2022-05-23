import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStudentArgs } from "./args/DeleteManyStudentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStudentResolver {
    deleteManyStudent(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStudentArgs): Promise<AffectedRowsOutput>;
}
