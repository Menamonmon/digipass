import { Classroom } from "../models/Classroom";
import { Student } from "../models/Student";
import { Teacher } from "../models/Teacher";
export declare class Pass {
    id: number;
    student?: Student | null;
    studentId?: number | null;
    classroom?: Classroom | null;
    classId?: number | null;
    createdAt?: Date | null;
    startTime?: Date | null;
    endTime?: Date | null;
    duration?: number | null;
    issuer?: Teacher | null;
    issuerId?: number | null;
}
