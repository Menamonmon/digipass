import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StudentScalarWhereWithAggregatesInput {
    AND?: StudentScalarWhereWithAggregatesInput[] | undefined;
    OR?: StudentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StudentScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    lastLogin?: DateTimeWithAggregatesFilter | undefined;
    studentId?: StringWithAggregatesFilter | undefined;
    passesUsed?: IntWithAggregatesFilter | undefined;
}
