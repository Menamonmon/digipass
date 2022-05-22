import { GraphQLResolveInfo } from "graphql";
import { UpsertStudentArgs } from "./args/UpsertStudentArgs";
import { Student } from "../../../models/Student";
export declare class UpsertStudentResolver {
    upsertStudent(ctx: any, info: GraphQLResolveInfo, args: UpsertStudentArgs): Promise<Student>;
}
