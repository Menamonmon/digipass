import { GraphQLResolveInfo } from "graphql";
import { CreateTeacherArgs } from "./args/CreateTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class CreateTeacherResolver {
    createTeacher(ctx: any, info: GraphQLResolveInfo, args: CreateTeacherArgs): Promise<Teacher>;
}
