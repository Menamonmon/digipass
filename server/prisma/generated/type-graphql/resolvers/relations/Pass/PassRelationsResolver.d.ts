import { Classroom } from "../../../models/Classroom";
import { Pass } from "../../../models/Pass";
import { Student } from "../../../models/Student";
import { Teacher } from "../../../models/Teacher";
export declare class PassRelationsResolver {
    student(pass: Pass, ctx: any): Promise<Student>;
    classroom(pass: Pass, ctx: any): Promise<Classroom>;
    issuer(pass: Pass, ctx: any): Promise<Teacher>;
}
