import { PassAvgOrderByAggregateInput } from "../inputs/PassAvgOrderByAggregateInput";
import { PassCountOrderByAggregateInput } from "../inputs/PassCountOrderByAggregateInput";
import { PassMaxOrderByAggregateInput } from "../inputs/PassMaxOrderByAggregateInput";
import { PassMinOrderByAggregateInput } from "../inputs/PassMinOrderByAggregateInput";
import { PassSumOrderByAggregateInput } from "../inputs/PassSumOrderByAggregateInput";
export declare class PassOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    studentId?: "asc" | "desc" | undefined;
    classId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    startTime?: "asc" | "desc" | undefined;
    endTime?: "asc" | "desc" | undefined;
    duration?: "asc" | "desc" | undefined;
    issuerId?: "asc" | "desc" | undefined;
    _count?: PassCountOrderByAggregateInput | undefined;
    _avg?: PassAvgOrderByAggregateInput | undefined;
    _max?: PassMaxOrderByAggregateInput | undefined;
    _min?: PassMinOrderByAggregateInput | undefined;
    _sum?: PassSumOrderByAggregateInput | undefined;
}
