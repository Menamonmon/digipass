import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class PassScalarWhereInput {
    AND?: PassScalarWhereInput[] | undefined;
    OR?: PassScalarWhereInput[] | undefined;
    NOT?: PassScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    studentId?: IntFilter | undefined;
    classId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    startTime?: DateTimeFilter | undefined;
    endTime?: DateTimeFilter | undefined;
    duration?: IntFilter | undefined;
    issuerId?: IntFilter | undefined;
}
