import { ClassroomOrderByRelationAggregateInput } from "../inputs/ClassroomOrderByRelationAggregateInput";
import { IPAddressOrderByRelationAggregateInput } from "../inputs/IPAddressOrderByRelationAggregateInput";
import { PassOrderByRelationAggregateInput } from "../inputs/PassOrderByRelationAggregateInput";
export declare class StudentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    lastLogin?: "asc" | "desc" | undefined;
    studentId?: "asc" | "desc" | undefined;
    passesUsed?: "asc" | "desc" | undefined;
    ipAddresses?: IPAddressOrderByRelationAggregateInput | undefined;
    classrooms?: ClassroomOrderByRelationAggregateInput | undefined;
    passes?: PassOrderByRelationAggregateInput | undefined;
}
