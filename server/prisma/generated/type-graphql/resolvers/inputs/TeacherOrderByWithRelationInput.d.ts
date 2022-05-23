import { ClassroomOrderByRelationAggregateInput } from "../inputs/ClassroomOrderByRelationAggregateInput";
import { PassOrderByRelationAggregateInput } from "../inputs/PassOrderByRelationAggregateInput";
export declare class TeacherOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    lastLogin?: "asc" | "desc" | undefined;
    classrooms?: ClassroomOrderByRelationAggregateInput | undefined;
    issuedPasses?: PassOrderByRelationAggregateInput | undefined;
}
