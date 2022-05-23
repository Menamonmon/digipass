import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TeacherScalarWhereWithAggregatesInput {
    AND?: TeacherScalarWhereWithAggregatesInput[] | undefined;
    OR?: TeacherScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TeacherScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    lastLogin?: DateTimeWithAggregatesFilter | undefined;
}
