import { StudentOrderByWithAggregationInput } from "../../../inputs/StudentOrderByWithAggregationInput";
import { StudentScalarWhereWithAggregatesInput } from "../../../inputs/StudentScalarWhereWithAggregatesInput";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";
export declare class GroupByStudentArgs {
    where?: StudentWhereInput | undefined;
    orderBy?: StudentOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "firstName" | "lastName" | "password" | "createdAt" | "lastLogin" | "studentId" | "passesUsed">;
    having?: StudentScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
