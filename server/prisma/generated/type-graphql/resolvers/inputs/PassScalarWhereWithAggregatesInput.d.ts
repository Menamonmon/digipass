import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class PassScalarWhereWithAggregatesInput {
    AND?: PassScalarWhereWithAggregatesInput[] | undefined;
    OR?: PassScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PassScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    studentId?: IntNullableWithAggregatesFilter | undefined;
    classId?: IntNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
    startTime?: DateTimeNullableWithAggregatesFilter | undefined;
    endTime?: DateTimeNullableWithAggregatesFilter | undefined;
    duration?: IntNullableWithAggregatesFilter | undefined;
    issuerId?: IntNullableWithAggregatesFilter | undefined;
}
