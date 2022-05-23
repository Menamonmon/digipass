import { StudentAvgOrderByAggregateInput } from "../inputs/StudentAvgOrderByAggregateInput";
import { StudentCountOrderByAggregateInput } from "../inputs/StudentCountOrderByAggregateInput";
import { StudentMaxOrderByAggregateInput } from "../inputs/StudentMaxOrderByAggregateInput";
import { StudentMinOrderByAggregateInput } from "../inputs/StudentMinOrderByAggregateInput";
import { StudentSumOrderByAggregateInput } from "../inputs/StudentSumOrderByAggregateInput";
export declare class StudentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    lastLogin?: "asc" | "desc" | undefined;
    studentId?: "asc" | "desc" | undefined;
    passesUsed?: "asc" | "desc" | undefined;
    _count?: StudentCountOrderByAggregateInput | undefined;
    _avg?: StudentAvgOrderByAggregateInput | undefined;
    _max?: StudentMaxOrderByAggregateInput | undefined;
    _min?: StudentMinOrderByAggregateInput | undefined;
    _sum?: StudentSumOrderByAggregateInput | undefined;
}
