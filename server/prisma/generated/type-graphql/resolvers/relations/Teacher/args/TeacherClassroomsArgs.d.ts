import { ClassroomOrderByWithRelationInput } from "../../../inputs/ClassroomOrderByWithRelationInput";
import { ClassroomWhereInput } from "../../../inputs/ClassroomWhereInput";
import { ClassroomWhereUniqueInput } from "../../../inputs/ClassroomWhereUniqueInput";
export declare class TeacherClassroomsArgs {
    where?: ClassroomWhereInput | undefined;
    orderBy?: ClassroomOrderByWithRelationInput[] | undefined;
    cursor?: ClassroomWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "createdAt" | "startTime" | "endTime" | "classCode" | "teacherId"> | undefined;
}
