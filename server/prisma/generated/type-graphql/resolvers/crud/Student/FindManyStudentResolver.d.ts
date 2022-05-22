import { GraphQLResolveInfo } from "graphql";
import { FindManyStudentArgs } from "./args/FindManyStudentArgs";
import { Student } from "../../../models/Student";
export declare class FindManyStudentResolver {
    students(ctx: any, info: GraphQLResolveInfo, args: FindManyStudentArgs): Promise<Student[]>;
}
