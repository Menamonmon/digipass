import { Classroom } from "../models/Classroom";
import { Pass } from "../models/Pass";
import { TeacherCount } from "../resolvers/outputs/TeacherCount";
export declare class Teacher {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    /**
     * TypeGraphQL.omit(output: true)
     */
    password: string;
    createdAt: Date;
    lastLogin: Date;
    classrooms?: Classroom[];
    issuedPasses?: Pass[];
    _count?: TeacherCount | null;
}
