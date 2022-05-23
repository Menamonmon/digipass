import { GraphQLResolveInfo } from "graphql";
import { DeleteStudentArgs } from "./args/DeleteStudentArgs";
import { Student } from "../../../models/Student";
export declare class DeleteStudentResolver {
    deleteStudent(ctx: any, info: GraphQLResolveInfo, args: DeleteStudentArgs): Promise<Student | null>;
}
