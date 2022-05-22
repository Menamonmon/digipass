import { ClassroomCreateNestedManyWithoutStudentsInput } from "../inputs/ClassroomCreateNestedManyWithoutStudentsInput";
import { IPAddressCreateNestedManyWithoutOwnerInput } from "../inputs/IPAddressCreateNestedManyWithoutOwnerInput";
export declare class StudentCreateWithoutPassesInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    studentId: string;
    passesUsed: number;
    ipAddresses?: IPAddressCreateNestedManyWithoutOwnerInput | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutStudentsInput | undefined;
}
