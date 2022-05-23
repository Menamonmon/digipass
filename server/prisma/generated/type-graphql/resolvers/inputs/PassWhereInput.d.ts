import { ClassroomRelationFilter } from "../inputs/ClassroomRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";
import { TeacherRelationFilter } from "../inputs/TeacherRelationFilter";
export declare class PassWhereInput {
    AND?: PassWhereInput[] | undefined;
    OR?: PassWhereInput[] | undefined;
    NOT?: PassWhereInput[] | undefined;
    id?: IntFilter | undefined;
    student?: StudentRelationFilter | undefined;
    studentId?: IntFilter | undefined;
    classroom?: ClassroomRelationFilter | undefined;
    classId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    startTime?: DateTimeFilter | undefined;
    endTime?: DateTimeFilter | undefined;
    duration?: IntFilter | undefined;
    issuer?: TeacherRelationFilter | undefined;
    issuerId?: IntFilter | undefined;
}
