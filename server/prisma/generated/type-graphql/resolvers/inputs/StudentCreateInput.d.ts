import { ClassroomCreateNestedManyWithoutStudentsInput } from "../inputs/ClassroomCreateNestedManyWithoutStudentsInput";
import { IPAddressCreateNestedManyWithoutOwnerInput } from "../inputs/IPAddressCreateNestedManyWithoutOwnerInput";
import { PassCreateNestedManyWithoutStudentInput } from "../inputs/PassCreateNestedManyWithoutStudentInput";
export declare class StudentCreateInput {
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
    passes?: PassCreateNestedManyWithoutStudentInput | undefined;
}
