import { ClassroomListRelationFilter } from "../inputs/ClassroomListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PassListRelationFilter } from "../inputs/PassListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TeacherWhereInput {
    AND?: TeacherWhereInput[] | undefined;
    OR?: TeacherWhereInput[] | undefined;
    NOT?: TeacherWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringNullableFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    lastLogin?: DateTimeNullableFilter | undefined;
    classrooms?: ClassroomListRelationFilter | undefined;
    issuedPasses?: PassListRelationFilter | undefined;
}
