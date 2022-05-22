import { ClassroomCreateNestedManyWithoutStudentsInput } from "../inputs/ClassroomCreateNestedManyWithoutStudentsInput";
import { PassCreateNestedManyWithoutStudentInput } from "../inputs/PassCreateNestedManyWithoutStudentInput";
export declare class StudentCreateWithoutIpAddressesInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    studentId: string;
    passesUsed: number;
    classrooms?: ClassroomCreateNestedManyWithoutStudentsInput | undefined;
    passes?: PassCreateNestedManyWithoutStudentInput | undefined;
}
