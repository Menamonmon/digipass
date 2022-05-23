import { Classroom } from "../../../models/Classroom";
import { Pass } from "../../../models/Pass";
import { Teacher } from "../../../models/Teacher";
import { TeacherClassroomsArgs } from "./args/TeacherClassroomsArgs";
import { TeacherIssuedPassesArgs } from "./args/TeacherIssuedPassesArgs";
export declare class TeacherRelationsResolver {
    classrooms(teacher: Teacher, ctx: any, args: TeacherClassroomsArgs): Promise<Classroom[]>;
    issuedPasses(teacher: Teacher, ctx: any, args: TeacherIssuedPassesArgs): Promise<Pass[]>;
}
