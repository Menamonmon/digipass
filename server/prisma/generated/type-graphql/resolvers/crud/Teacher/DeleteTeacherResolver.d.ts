import { GraphQLResolveInfo } from "graphql";
import { DeleteTeacherArgs } from "./args/DeleteTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class DeleteTeacherResolver {
    deleteTeacher(ctx: any, info: GraphQLResolveInfo, args: DeleteTeacherArgs): Promise<Teacher | null>;
}
