import { TeacherAvgAggregate } from "../outputs/TeacherAvgAggregate";
import { TeacherCountAggregate } from "../outputs/TeacherCountAggregate";
import { TeacherMaxAggregate } from "../outputs/TeacherMaxAggregate";
import { TeacherMinAggregate } from "../outputs/TeacherMinAggregate";
import { TeacherSumAggregate } from "../outputs/TeacherSumAggregate";
export declare class TeacherGroupBy {
    id: number;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    password: string | null;
    createdAt: Date | null;
    lastLogin: Date | null;
    _count: TeacherCountAggregate | null;
    _avg: TeacherAvgAggregate | null;
    _sum: TeacherSumAggregate | null;
    _min: TeacherMinAggregate | null;
    _max: TeacherMaxAggregate | null;
}
