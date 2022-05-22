import { Pass } from "../models/Pass";
import { Student } from "../models/Student";
import { Teacher } from "../models/Teacher";
import { ClassroomCount } from "../resolvers/outputs/ClassroomCount";
export declare class Classroom {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    startTime: Date;
    endTime: Date;
    classCode: string;
    students?: Student[];
    teacher?: Teacher;
    teacherId: number;
    passes?: Pass[];
    _count?: ClassroomCount | null;
}
