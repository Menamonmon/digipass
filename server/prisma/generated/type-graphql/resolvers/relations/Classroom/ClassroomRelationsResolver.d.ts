import { Classroom } from "../../../models/Classroom";
import { Pass } from "../../../models/Pass";
import { Student } from "../../../models/Student";
import { Teacher } from "../../../models/Teacher";
import { ClassroomPassesArgs } from "./args/ClassroomPassesArgs";
import { ClassroomStudentsArgs } from "./args/ClassroomStudentsArgs";
export declare class ClassroomRelationsResolver {
    students(classroom: Classroom, ctx: any, args: ClassroomStudentsArgs): Promise<Student[]>;
    teacher(classroom: Classroom, ctx: any): Promise<Teacher>;
    passes(classroom: Classroom, ctx: any, args: ClassroomPassesArgs): Promise<Pass[]>;
}
