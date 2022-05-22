import { GraphQLResolveInfo } from "graphql";
import { FindFirstStudentArgs } from "./args/FindFirstStudentArgs";
import { Student } from "../../../models/Student";
export declare class FindFirstStudentResolver {
    findFirstStudent(ctx: any, info: GraphQLResolveInfo, args: FindFirstStudentArgs): Promise<Student | null>;
}
