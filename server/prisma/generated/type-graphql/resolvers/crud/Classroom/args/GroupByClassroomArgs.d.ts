import { ClassroomOrderByWithAggregationInput } from "../../../inputs/ClassroomOrderByWithAggregationInput";
import { ClassroomScalarWhereWithAggregatesInput } from "../../../inputs/ClassroomScalarWhereWithAggregatesInput";
import { ClassroomWhereInput } from "../../../inputs/ClassroomWhereInput";
export declare class GroupByClassroomArgs {
    where?: ClassroomWhereInput | undefined;
    orderBy?: ClassroomOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "createdAt" | "startTime" | "endTime" | "classCode" | "teacherId">;
    having?: ClassroomScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
