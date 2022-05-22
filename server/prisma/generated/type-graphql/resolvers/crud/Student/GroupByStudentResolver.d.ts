import { GraphQLResolveInfo } from "graphql";
import { GroupByStudentArgs } from "./args/GroupByStudentArgs";
import { StudentGroupBy } from "../../outputs/StudentGroupBy";
export declare class GroupByStudentResolver {
    groupByStudent(ctx: any, info: GraphQLResolveInfo, args: GroupByStudentArgs): Promise<StudentGroupBy[]>;
}
