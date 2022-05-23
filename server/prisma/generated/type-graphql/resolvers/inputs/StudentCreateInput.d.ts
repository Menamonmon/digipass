import { ClassroomCreateNestedManyWithoutStudentsInput } from "../inputs/ClassroomCreateNestedManyWithoutStudentsInput";
import { IPAddressCreateNestedManyWithoutOwnerInput } from "../inputs/IPAddressCreateNestedManyWithoutOwnerInput";
import { PassCreateNestedManyWithoutStudentInput } from "../inputs/PassCreateNestedManyWithoutStudentInput";
export declare class StudentCreateInput {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    studentId?: string | undefined;
    passesUsed?: number | undefined;
    ipAddresses?: IPAddressCreateNestedManyWithoutOwnerInput | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutStudentsInput | undefined;
    passes?: PassCreateNestedManyWithoutStudentInput | undefined;
}
