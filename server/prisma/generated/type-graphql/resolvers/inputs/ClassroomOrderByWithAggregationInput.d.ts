import { ClassroomAvgOrderByAggregateInput } from "../inputs/ClassroomAvgOrderByAggregateInput";
import { ClassroomCountOrderByAggregateInput } from "../inputs/ClassroomCountOrderByAggregateInput";
import { ClassroomMaxOrderByAggregateInput } from "../inputs/ClassroomMaxOrderByAggregateInput";
import { ClassroomMinOrderByAggregateInput } from "../inputs/ClassroomMinOrderByAggregateInput";
import { ClassroomSumOrderByAggregateInput } from "../inputs/ClassroomSumOrderByAggregateInput";
export declare class ClassroomOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    startTime?: "asc" | "desc" | undefined;
    endTime?: "asc" | "desc" | undefined;
    classCode?: "asc" | "desc" | undefined;
    teacherId?: "asc" | "desc" | undefined;
    _count?: ClassroomCountOrderByAggregateInput | undefined;
    _avg?: ClassroomAvgOrderByAggregateInput | undefined;
    _max?: ClassroomMaxOrderByAggregateInput | undefined;
    _min?: ClassroomMinOrderByAggregateInput | undefined;
    _sum?: ClassroomSumOrderByAggregateInput | undefined;
}
