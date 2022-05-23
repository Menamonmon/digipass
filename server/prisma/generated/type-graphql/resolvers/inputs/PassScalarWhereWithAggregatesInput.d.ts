import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class PassScalarWhereWithAggregatesInput {
    AND?: PassScalarWhereWithAggregatesInput[] | undefined;
    OR?: PassScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PassScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    studentId?: IntWithAggregatesFilter | undefined;
    classId?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    startTime?: DateTimeWithAggregatesFilter | undefined;
    endTime?: DateTimeWithAggregatesFilter | undefined;
    duration?: IntWithAggregatesFilter | undefined;
    issuerId?: IntWithAggregatesFilter | undefined;
}
