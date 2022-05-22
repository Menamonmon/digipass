import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeacherArgs } from "./args/FindUniqueTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class FindUniqueTeacherResolver {
    teacher(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeacherArgs): Promise<Teacher | null>;
}
