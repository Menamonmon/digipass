import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ClassroomScalarWhereInput {
    AND?: ClassroomScalarWhereInput[] | undefined;
    OR?: ClassroomScalarWhereInput[] | undefined;
    NOT?: ClassroomScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    startTime?: DateTimeNullableFilter | undefined;
    endTime?: DateTimeNullableFilter | undefined;
    classCode?: StringNullableFilter | undefined;
    teacherId?: IntNullableFilter | undefined;
}
