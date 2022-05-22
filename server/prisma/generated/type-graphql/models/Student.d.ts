import { Classroom } from "../models/Classroom";
import { IPAddress } from "../models/IPAddress";
import { Pass } from "../models/Pass";
import { StudentCount } from "../resolvers/outputs/StudentCount";
export declare class Student {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    /**
     * TypeGraphQL.omit(output: true)
     */
    password: string;
    createdAt: Date;
    lastLogin: Date;
    studentId: string;
    passesUsed: number;
    ipAddresses?: IPAddress[];
    classrooms?: Classroom[];
    passes?: Pass[];
    _count?: StudentCount | null;
}
