import { GraphQLResolveInfo } from "graphql";
import { GroupByClassroomArgs } from "./args/GroupByClassroomArgs";
import { ClassroomGroupBy } from "../../outputs/ClassroomGroupBy";
export declare class GroupByClassroomResolver {
    groupByClassroom(ctx: any, info: GraphQLResolveInfo, args: GroupByClassroomArgs): Promise<ClassroomGroupBy[]>;
}
