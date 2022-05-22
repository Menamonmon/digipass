import { TeacherOrderByWithRelationInput } from "../../../inputs/TeacherOrderByWithRelationInput";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";
export declare class FindFirstTeacherArgs {
    where?: TeacherWhereInput | undefined;
    orderBy?: TeacherOrderByWithRelationInput[] | undefined;
    cursor?: TeacherWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "firstName" | "lastName" | "password" | "createdAt" | "lastLogin"> | undefined;
}
