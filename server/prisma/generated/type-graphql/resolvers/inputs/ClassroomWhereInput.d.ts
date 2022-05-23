import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PassListRelationFilter } from "../inputs/PassListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentListRelationFilter } from "../inputs/StudentListRelationFilter";
import { TeacherRelationFilter } from "../inputs/TeacherRelationFilter";
export declare class ClassroomWhereInput {
    AND?: ClassroomWhereInput[] | undefined;
    OR?: ClassroomWhereInput[] | undefined;
    NOT?: ClassroomWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    startTime?: DateTimeFilter | undefined;
    endTime?: DateTimeFilter | undefined;
    classCode?: StringFilter | undefined;
    students?: StudentListRelationFilter | undefined;
    teacher?: TeacherRelationFilter | undefined;
    teacherId?: IntFilter | undefined;
    passes?: PassListRelationFilter | undefined;
}
