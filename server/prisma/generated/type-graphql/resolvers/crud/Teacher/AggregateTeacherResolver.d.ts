import { GraphQLResolveInfo } from "graphql";
import { AggregateTeacherArgs } from "./args/AggregateTeacherArgs";
import { AggregateTeacher } from "../../outputs/AggregateTeacher";
export declare class AggregateTeacherResolver {
    aggregateTeacher(ctx: any, info: GraphQLResolveInfo, args: AggregateTeacherArgs): Promise<AggregateTeacher>;
}
