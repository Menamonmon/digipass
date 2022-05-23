import { Pass } from "../models/Pass";
import { Student } from "../models/Student";
import { Teacher } from "../models/Teacher";
import { ClassroomCount } from "../resolvers/outputs/ClassroomCount";
export declare class Classroom {
    id: number;
    title?: string | null;
    description?: string | null;
    createdAt?: Date | null;
    startTime?: Date | null;
    endTime?: Date | null;
    classCode?: string | null;
    students?: Student[];
    teacher?: Teacher | null;
    teacherId?: number | null;
    passes?: Pass[];
    _count?: ClassroomCount | null;
}
