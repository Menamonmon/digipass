import { Student } from "../models/Student";
export declare class IPAddress {
    id: number;
    owner?: Student | null;
    ownerId?: number | null;
    createdAt?: Date | null;
    address?: string | null;
}
