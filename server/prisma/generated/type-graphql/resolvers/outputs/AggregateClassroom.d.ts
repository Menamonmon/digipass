import { ClassroomAvgAggregate } from "../outputs/ClassroomAvgAggregate";
import { ClassroomCountAggregate } from "../outputs/ClassroomCountAggregate";
import { ClassroomMaxAggregate } from "../outputs/ClassroomMaxAggregate";
import { ClassroomMinAggregate } from "../outputs/ClassroomMinAggregate";
import { ClassroomSumAggregate } from "../outputs/ClassroomSumAggregate";
export declare class AggregateClassroom {
    _count: ClassroomCountAggregate | null;
    _avg: ClassroomAvgAggregate | null;
    _sum: ClassroomSumAggregate | null;
    _min: ClassroomMinAggregate | null;
    _max: ClassroomMaxAggregate | null;
}
