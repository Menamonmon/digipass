import { GraphQLResolveInfo } from "graphql";
import { CreateManyTeacherArgs } from "./args/CreateManyTeacherArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTeacherResolver {
    createManyTeacher(ctx: any, info: GraphQLResolveInfo, args: CreateManyTeacherArgs): Promise<AffectedRowsOutput>;
}
