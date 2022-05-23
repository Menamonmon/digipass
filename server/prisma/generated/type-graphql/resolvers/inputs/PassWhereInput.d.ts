import { ClassroomRelationFilter } from "../inputs/ClassroomRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";
import { TeacherRelationFilter } from "../inputs/TeacherRelationFilter";
export declare class PassWhereInput {
    AND?: PassWhereInput[] | undefined;
    OR?: PassWhereInput[] | undefined;
    NOT?: PassWhereInput[] | undefined;
    id?: IntFilter | undefined;
    student?: StudentRelationFilter | undefined;
    studentId?: IntNullableFilter | undefined;
    classroom?: ClassroomRelationFilter | undefined;
    classId?: IntNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    startTime?: DateTimeNullableFilter | undefined;
    endTime?: DateTimeNullableFilter | undefined;
    duration?: IntNullableFilter | undefined;
    issuer?: TeacherRelationFilter | undefined;
    issuerId?: IntNullableFilter | undefined;
}
