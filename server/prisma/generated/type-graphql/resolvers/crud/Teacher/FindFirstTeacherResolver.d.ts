import { GraphQLResolveInfo } from "graphql";
import { FindFirstTeacherArgs } from "./args/FindFirstTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class FindFirstTeacherResolver {
    findFirstTeacher(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeacherArgs): Promise<Teacher | null>;
}
