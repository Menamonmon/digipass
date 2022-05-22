import { GraphQLResolveInfo } from "graphql";
import { UpdateTeacherArgs } from "./args/UpdateTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class UpdateTeacherResolver {
    updateTeacher(ctx: any, info: GraphQLResolveInfo, args: UpdateTeacherArgs): Promise<Teacher | null>;
}
