import { IPAddressCreateNestedManyWithoutOwnerInput } from "../inputs/IPAddressCreateNestedManyWithoutOwnerInput";
import { PassCreateNestedManyWithoutStudentInput } from "../inputs/PassCreateNestedManyWithoutStudentInput";
export declare class StudentCreateWithoutClassroomsInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    studentId: string;
    passesUsed: number;
    ipAddresses?: IPAddressCreateNestedManyWithoutOwnerInput | undefined;
    passes?: PassCreateNestedManyWithoutStudentInput | undefined;
}
