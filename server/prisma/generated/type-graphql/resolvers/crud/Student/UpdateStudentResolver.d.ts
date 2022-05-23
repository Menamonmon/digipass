import { GraphQLResolveInfo } from "graphql";
import { UpdateStudentArgs } from "./args/UpdateStudentArgs";
import { Student } from "../../../models/Student";
export declare class UpdateStudentResolver {
    updateStudent(ctx: any, info: GraphQLResolveInfo, args: UpdateStudentArgs): Promise<Student | null>;
}
