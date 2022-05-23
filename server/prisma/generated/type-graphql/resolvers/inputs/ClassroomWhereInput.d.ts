import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PassListRelationFilter } from "../inputs/PassListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StudentListRelationFilter } from "../inputs/StudentListRelationFilter";
import { TeacherRelationFilter } from "../inputs/TeacherRelationFilter";
export declare class ClassroomWhereInput {
    AND?: ClassroomWhereInput[] | undefined;
    OR?: ClassroomWhereInput[] | undefined;
    NOT?: ClassroomWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    startTime?: DateTimeNullableFilter | undefined;
    endTime?: DateTimeNullableFilter | undefined;
    classCode?: StringNullableFilter | undefined;
    students?: StudentListRelationFilter | undefined;
    teacher?: TeacherRelationFilter | undefined;
    teacherId?: IntNullableFilter | undefined;
    passes?: PassListRelationFilter | undefined;
}
