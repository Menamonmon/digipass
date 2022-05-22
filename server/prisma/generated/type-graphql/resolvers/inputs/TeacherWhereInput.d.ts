import { ClassroomListRelationFilter } from "../inputs/ClassroomListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PassListRelationFilter } from "../inputs/PassListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TeacherWhereInput {
    AND?: TeacherWhereInput[] | undefined;
    OR?: TeacherWhereInput[] | undefined;
    NOT?: TeacherWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    lastLogin?: DateTimeFilter | undefined;
    classrooms?: ClassroomListRelationFilter | undefined;
    issuedPasses?: PassListRelationFilter | undefined;
}
