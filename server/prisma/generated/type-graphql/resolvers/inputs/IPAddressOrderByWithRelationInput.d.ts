import { StudentOrderByWithRelationInput } from "../inputs/StudentOrderByWithRelationInput";
export declare class IPAddressOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    owner?: StudentOrderByWithRelationInput | undefined;
    ownerId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
}
