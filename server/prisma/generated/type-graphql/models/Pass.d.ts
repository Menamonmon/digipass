import { Classroom } from "../models/Classroom";
import { Student } from "../models/Student";
import { Teacher } from "../models/Teacher";
export declare class Pass {
    id: number;
    student?: Student;
    studentId: number;
    classroom?: Classroom;
    classId: number;
    createdAt: Date;
    startTime: Date;
    endTime: Date;
    duration: number;
    issuer?: Teacher;
    issuerId: number;
}
