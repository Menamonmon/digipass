import { GraphQLResolveInfo } from "graphql";
import { GroupByTeacherArgs } from "./args/GroupByTeacherArgs";
import { TeacherGroupBy } from "../../outputs/TeacherGroupBy";
export declare class GroupByTeacherResolver {
    groupByTeacher(ctx: any, info: GraphQLResolveInfo, args: GroupByTeacherArgs): Promise<TeacherGroupBy[]>;
}
