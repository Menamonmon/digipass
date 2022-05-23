import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTeacherArgs } from "./args/UpdateManyTeacherArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTeacherResolver {
    updateManyTeacher(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTeacherArgs): Promise<AffectedRowsOutput>;
}
