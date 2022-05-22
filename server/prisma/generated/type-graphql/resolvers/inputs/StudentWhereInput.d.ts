import { ClassroomListRelationFilter } from "../inputs/ClassroomListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IPAddressListRelationFilter } from "../inputs/IPAddressListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PassListRelationFilter } from "../inputs/PassListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class StudentWhereInput {
    AND?: StudentWhereInput[] | undefined;
    OR?: StudentWhereInput[] | undefined;
    NOT?: StudentWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    lastLogin?: DateTimeFilter | undefined;
    studentId?: StringFilter | undefined;
    passesUsed?: IntFilter | undefined;
    ipAddresses?: IPAddressListRelationFilter | undefined;
    classrooms?: ClassroomListRelationFilter | undefined;
    passes?: PassListRelationFilter | undefined;
}
