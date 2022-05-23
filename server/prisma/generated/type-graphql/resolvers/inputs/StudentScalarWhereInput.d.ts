import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class StudentScalarWhereInput {
    AND?: StudentScalarWhereInput[] | undefined;
    OR?: StudentScalarWhereInput[] | undefined;
    NOT?: StudentScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringNullableFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    lastLogin?: DateTimeNullableFilter | undefined;
    studentId?: StringNullableFilter | undefined;
    passesUsed?: IntNullableFilter | undefined;
}
