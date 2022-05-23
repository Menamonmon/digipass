import { StudentAvgAggregate } from "../outputs/StudentAvgAggregate";
import { StudentCountAggregate } from "../outputs/StudentCountAggregate";
import { StudentMaxAggregate } from "../outputs/StudentMaxAggregate";
import { StudentMinAggregate } from "../outputs/StudentMinAggregate";
import { StudentSumAggregate } from "../outputs/StudentSumAggregate";
export declare class StudentGroupBy {
    id: number;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    password: string;
    createdAt: Date | null;
    lastLogin: Date | null;
    studentId: string | null;
    passesUsed: number | null;
    _count: StudentCountAggregate | null;
    _avg: StudentAvgAggregate | null;
    _sum: StudentSumAggregate | null;
    _min: StudentMinAggregate | null;
    _max: StudentMaxAggregate | null;
}
