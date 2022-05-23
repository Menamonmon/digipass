import { Classroom } from "../models/Classroom";
import { IPAddress } from "../models/IPAddress";
import { Pass } from "../models/Pass";
import { StudentCount } from "../resolvers/outputs/StudentCount";
export declare class Student {
    id: number;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * TypeGraphQL.omit(output: true)
     */
    password: string;
    createdAt?: Date | null;
    lastLogin?: Date | null;
    studentId?: string | null;
    passesUsed?: number | null;
    ipAddresses?: IPAddress[];
    classrooms?: Classroom[];
    passes?: Pass[];
    _count?: StudentCount | null;
}
