import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTeacherArgs } from "./args/DeleteManyTeacherArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTeacherResolver {
    deleteManyTeacher(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTeacherArgs): Promise<AffectedRowsOutput>;
}
