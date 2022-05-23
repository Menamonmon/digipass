import { GraphQLResolveInfo } from "graphql";
import { CreateStudentArgs } from "./args/CreateStudentArgs";
import { Student } from "../../../models/Student";
export declare class CreateStudentResolver {
    createStudent(ctx: any, info: GraphQLResolveInfo, args: CreateStudentArgs): Promise<Student>;
}
