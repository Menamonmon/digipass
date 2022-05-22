import { PassOrderByWithAggregationInput } from "../../../inputs/PassOrderByWithAggregationInput";
import { PassScalarWhereWithAggregatesInput } from "../../../inputs/PassScalarWhereWithAggregatesInput";
import { PassWhereInput } from "../../../inputs/PassWhereInput";
export declare class GroupByPassArgs {
    where?: PassWhereInput | undefined;
    orderBy?: PassOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "studentId" | "classId" | "createdAt" | "startTime" | "endTime" | "duration" | "issuerId">;
    having?: PassScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
