import { TeacherAvgAggregate } from "../outputs/TeacherAvgAggregate";
import { TeacherCountAggregate } from "../outputs/TeacherCountAggregate";
import { TeacherMaxAggregate } from "../outputs/TeacherMaxAggregate";
import { TeacherMinAggregate } from "../outputs/TeacherMinAggregate";
import { TeacherSumAggregate } from "../outputs/TeacherSumAggregate";
export declare class AggregateTeacher {
    _count: TeacherCountAggregate | null;
    _avg: TeacherAvgAggregate | null;
    _sum: TeacherSumAggregate | null;
    _min: TeacherMinAggregate | null;
    _max: TeacherMaxAggregate | null;
}
