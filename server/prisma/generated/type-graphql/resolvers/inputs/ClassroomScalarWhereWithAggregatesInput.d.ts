import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ClassroomScalarWhereWithAggregatesInput {
    AND?: ClassroomScalarWhereWithAggregatesInput[] | undefined;
    OR?: ClassroomScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ClassroomScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
    startTime?: DateTimeNullableWithAggregatesFilter | undefined;
    endTime?: DateTimeNullableWithAggregatesFilter | undefined;
    classCode?: StringNullableWithAggregatesFilter | undefined;
    teacherId?: IntNullableWithAggregatesFilter | undefined;
}
