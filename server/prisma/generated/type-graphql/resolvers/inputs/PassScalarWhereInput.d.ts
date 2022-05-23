import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
export declare class PassScalarWhereInput {
    AND?: PassScalarWhereInput[] | undefined;
    OR?: PassScalarWhereInput[] | undefined;
    NOT?: PassScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    studentId?: IntNullableFilter | undefined;
    classId?: IntNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    startTime?: DateTimeNullableFilter | undefined;
    endTime?: DateTimeNullableFilter | undefined;
    duration?: IntNullableFilter | undefined;
    issuerId?: IntNullableFilter | undefined;
}
