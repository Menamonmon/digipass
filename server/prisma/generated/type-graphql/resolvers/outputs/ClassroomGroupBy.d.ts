import { ClassroomAvgAggregate } from "../outputs/ClassroomAvgAggregate";
import { ClassroomCountAggregate } from "../outputs/ClassroomCountAggregate";
import { ClassroomMaxAggregate } from "../outputs/ClassroomMaxAggregate";
import { ClassroomMinAggregate } from "../outputs/ClassroomMinAggregate";
import { ClassroomSumAggregate } from "../outputs/ClassroomSumAggregate";
export declare class ClassroomGroupBy {
    id: number;
    title: string | null;
    description: string | null;
    createdAt: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    classCode: string | null;
    teacherId: number | null;
    _count: ClassroomCountAggregate | null;
    _avg: ClassroomAvgAggregate | null;
    _sum: ClassroomSumAggregate | null;
    _min: ClassroomMinAggregate | null;
    _max: ClassroomMaxAggregate | null;
}
