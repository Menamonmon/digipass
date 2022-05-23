import { Classroom } from "../models/Classroom";
import { Pass } from "../models/Pass";
import { TeacherCount } from "../resolvers/outputs/TeacherCount";
export declare class Teacher {
    id: number;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * TypeGraphQL.omit(output: true)
     */
    password?: string | null;
    createdAt?: Date | null;
    lastLogin?: Date | null;
    classrooms?: Classroom[];
    issuedPasses?: Pass[];
    _count?: TeacherCount | null;
}
