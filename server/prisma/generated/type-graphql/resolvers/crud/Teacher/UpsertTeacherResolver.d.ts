import { GraphQLResolveInfo } from "graphql";
import { UpsertTeacherArgs } from "./args/UpsertTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class UpsertTeacherResolver {
    upsertTeacher(ctx: any, info: GraphQLResolveInfo, args: UpsertTeacherArgs): Promise<Teacher>;
}
