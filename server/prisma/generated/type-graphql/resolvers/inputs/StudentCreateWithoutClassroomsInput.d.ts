import { IPAddressCreateNestedManyWithoutOwnerInput } from "../inputs/IPAddressCreateNestedManyWithoutOwnerInput";
import { PassCreateNestedManyWithoutStudentInput } from "../inputs/PassCreateNestedManyWithoutStudentInput";
export declare class StudentCreateWithoutClassroomsInput {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    studentId?: string | undefined;
    passesUsed?: number | undefined;
    ipAddresses?: IPAddressCreateNestedManyWithoutOwnerInput | undefined;
    passes?: PassCreateNestedManyWithoutStudentInput | undefined;
}
