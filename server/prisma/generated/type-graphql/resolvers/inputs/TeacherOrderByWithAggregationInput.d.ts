import { TeacherAvgOrderByAggregateInput } from "../inputs/TeacherAvgOrderByAggregateInput";
import { TeacherCountOrderByAggregateInput } from "../inputs/TeacherCountOrderByAggregateInput";
import { TeacherMaxOrderByAggregateInput } from "../inputs/TeacherMaxOrderByAggregateInput";
import { TeacherMinOrderByAggregateInput } from "../inputs/TeacherMinOrderByAggregateInput";
import { TeacherSumOrderByAggregateInput } from "../inputs/TeacherSumOrderByAggregateInput";
export declare class TeacherOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    lastLogin?: "asc" | "desc" | undefined;
    _count?: TeacherCountOrderByAggregateInput | undefined;
    _avg?: TeacherAvgOrderByAggregateInput | undefined;
    _max?: TeacherMaxOrderByAggregateInput | undefined;
    _min?: TeacherMinOrderByAggregateInput | undefined;
    _sum?: TeacherSumOrderByAggregateInput | undefined;
}
