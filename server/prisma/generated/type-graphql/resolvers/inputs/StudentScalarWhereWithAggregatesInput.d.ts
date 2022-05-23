import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StudentScalarWhereWithAggregatesInput {
    AND?: StudentScalarWhereWithAggregatesInput[] | undefined;
    OR?: StudentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StudentScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
    lastLogin?: DateTimeNullableWithAggregatesFilter | undefined;
    studentId?: StringNullableWithAggregatesFilter | undefined;
    passesUsed?: IntNullableWithAggregatesFilter | undefined;
}
