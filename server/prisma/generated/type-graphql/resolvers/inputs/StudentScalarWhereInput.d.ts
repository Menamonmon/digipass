import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class StudentScalarWhereInput {
    AND?: StudentScalarWhereInput[] | undefined;
    OR?: StudentScalarWhereInput[] | undefined;
    NOT?: StudentScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    lastLogin?: DateTimeFilter | undefined;
    studentId?: StringFilter | undefined;
    passesUsed?: IntFilter | undefined;
}
