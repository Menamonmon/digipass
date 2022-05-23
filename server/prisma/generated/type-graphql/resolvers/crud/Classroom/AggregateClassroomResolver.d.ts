import { GraphQLResolveInfo } from "graphql";
import { AggregateClassroomArgs } from "./args/AggregateClassroomArgs";
import { AggregateClassroom } from "../../outputs/AggregateClassroom";
export declare class AggregateClassroomResolver {
    aggregateClassroom(ctx: any, info: GraphQLResolveInfo, args: AggregateClassroomArgs): Promise<AggregateClassroom>;
}
