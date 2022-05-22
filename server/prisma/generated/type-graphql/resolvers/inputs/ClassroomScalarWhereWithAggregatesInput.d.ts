import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ClassroomScalarWhereWithAggregatesInput {
    AND?: ClassroomScalarWhereWithAggregatesInput[] | undefined;
    OR?: ClassroomScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ClassroomScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    startTime?: DateTimeWithAggregatesFilter | undefined;
    endTime?: DateTimeWithAggregatesFilter | undefined;
    classCode?: StringWithAggregatesFilter | undefined;
    teacherId?: IntWithAggregatesFilter | undefined;
}
