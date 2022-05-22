import { Classroom } from "../../../models/Classroom";
import { IPAddress } from "../../../models/IPAddress";
import { Pass } from "../../../models/Pass";
import { Student } from "../../../models/Student";
import { StudentClassroomsArgs } from "./args/StudentClassroomsArgs";
import { StudentIpAddressesArgs } from "./args/StudentIpAddressesArgs";
import { StudentPassesArgs } from "./args/StudentPassesArgs";
export declare class StudentRelationsResolver {
    ipAddresses(student: Student, ctx: any, args: StudentIpAddressesArgs): Promise<IPAddress[]>;
    classrooms(student: Student, ctx: any, args: StudentClassroomsArgs): Promise<Classroom[]>;
    passes(student: Student, ctx: any, args: StudentPassesArgs): Promise<Pass[]>;
}
