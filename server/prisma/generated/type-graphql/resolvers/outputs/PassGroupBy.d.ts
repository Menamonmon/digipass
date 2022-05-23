import { PassAvgAggregate } from "../outputs/PassAvgAggregate";
import { PassCountAggregate } from "../outputs/PassCountAggregate";
import { PassMaxAggregate } from "../outputs/PassMaxAggregate";
import { PassMinAggregate } from "../outputs/PassMinAggregate";
import { PassSumAggregate } from "../outputs/PassSumAggregate";
export declare class PassGroupBy {
    id: number;
    studentId: number | null;
    classId: number | null;
    createdAt: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    duration: number | null;
    issuerId: number | null;
    _count: PassCountAggregate | null;
    _avg: PassAvgAggregate | null;
    _sum: PassSumAggregate | null;
    _min: PassMinAggregate | null;
    _max: PassMaxAggregate | null;
}
