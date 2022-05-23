import { ClassroomListRelationFilter } from "../inputs/ClassroomListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IPAddressListRelationFilter } from "../inputs/IPAddressListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PassListRelationFilter } from "../inputs/PassListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class StudentWhereInput {
    AND?: StudentWhereInput[] | undefined;
    OR?: StudentWhereInput[] | undefined;
    NOT?: StudentWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringNullableFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    lastLogin?: DateTimeNullableFilter | undefined;
    studentId?: StringNullableFilter | undefined;
    passesUsed?: IntNullableFilter | undefined;
    ipAddresses?: IPAddressListRelationFilter | undefined;
    classrooms?: ClassroomListRelationFilter | undefined;
    passes?: PassListRelationFilter | undefined;
}
