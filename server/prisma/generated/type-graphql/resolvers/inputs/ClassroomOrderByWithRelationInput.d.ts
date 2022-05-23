import { PassOrderByRelationAggregateInput } from "../inputs/PassOrderByRelationAggregateInput";
import { StudentOrderByRelationAggregateInput } from "../inputs/StudentOrderByRelationAggregateInput";
import { TeacherOrderByWithRelationInput } from "../inputs/TeacherOrderByWithRelationInput";
export declare class ClassroomOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    startTime?: "asc" | "desc" | undefined;
    endTime?: "asc" | "desc" | undefined;
    classCode?: "asc" | "desc" | undefined;
    students?: StudentOrderByRelationAggregateInput | undefined;
    teacher?: TeacherOrderByWithRelationInput | undefined;
    teacherId?: "asc" | "desc" | undefined;
    passes?: PassOrderByRelationAggregateInput | undefined;
}
