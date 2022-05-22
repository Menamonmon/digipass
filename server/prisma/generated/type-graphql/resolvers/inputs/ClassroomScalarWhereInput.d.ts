import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ClassroomScalarWhereInput {
    AND?: ClassroomScalarWhereInput[] | undefined;
    OR?: ClassroomScalarWhereInput[] | undefined;
    NOT?: ClassroomScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    startTime?: DateTimeFilter | undefined;
    endTime?: DateTimeFilter | undefined;
    classCode?: StringFilter | undefined;
    teacherId?: IntFilter | undefined;
}
