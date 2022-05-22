import { StudentAvgAggregate } from "../outputs/StudentAvgAggregate";
import { StudentCountAggregate } from "../outputs/StudentCountAggregate";
import { StudentMaxAggregate } from "../outputs/StudentMaxAggregate";
import { StudentMinAggregate } from "../outputs/StudentMinAggregate";
import { StudentSumAggregate } from "../outputs/StudentSumAggregate";
export declare class AggregateStudent {
    _count: StudentCountAggregate | null;
    _avg: StudentAvgAggregate | null;
    _sum: StudentSumAggregate | null;
    _min: StudentMinAggregate | null;
    _max: StudentMaxAggregate | null;
}
