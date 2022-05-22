import { GraphQLResolveInfo } from "graphql";
import { AggregateStudentArgs } from "./args/AggregateStudentArgs";
import { AggregateStudent } from "../../outputs/AggregateStudent";
export declare class AggregateStudentResolver {
    aggregateStudent(ctx: any, info: GraphQLResolveInfo, args: AggregateStudentArgs): Promise<AggregateStudent>;
}
