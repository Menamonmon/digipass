import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStudentArgs } from "./args/FindUniqueStudentArgs";
import { Student } from "../../../models/Student";
export declare class FindUniqueStudentResolver {
    student(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStudentArgs): Promise<Student | null>;
}
