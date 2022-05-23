import { ClassroomOrderByWithRelationInput } from "../inputs/ClassroomOrderByWithRelationInput";
import { StudentOrderByWithRelationInput } from "../inputs/StudentOrderByWithRelationInput";
import { TeacherOrderByWithRelationInput } from "../inputs/TeacherOrderByWithRelationInput";
export declare class PassOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    student?: StudentOrderByWithRelationInput | undefined;
    studentId?: "asc" | "desc" | undefined;
    classroom?: ClassroomOrderByWithRelationInput | undefined;
    classId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    startTime?: "asc" | "desc" | undefined;
    endTime?: "asc" | "desc" | undefined;
    duration?: "asc" | "desc" | undefined;
    issuer?: TeacherOrderByWithRelationInput | undefined;
    issuerId?: "asc" | "desc" | undefined;
}
