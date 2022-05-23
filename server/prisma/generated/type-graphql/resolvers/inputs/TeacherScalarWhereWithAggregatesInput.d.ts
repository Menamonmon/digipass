import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TeacherScalarWhereWithAggregatesInput {
    AND?: TeacherScalarWhereWithAggregatesInput[] | undefined;
    OR?: TeacherScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TeacherScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    password?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
    lastLogin?: DateTimeNullableWithAggregatesFilter | undefined;
}
