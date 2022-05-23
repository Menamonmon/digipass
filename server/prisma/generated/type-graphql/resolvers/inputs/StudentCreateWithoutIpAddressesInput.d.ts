import { ClassroomCreateNestedManyWithoutStudentsInput } from "../inputs/ClassroomCreateNestedManyWithoutStudentsInput";
import { PassCreateNestedManyWithoutStudentInput } from "../inputs/PassCreateNestedManyWithoutStudentInput";
export declare class StudentCreateWithoutIpAddressesInput {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    studentId?: string | undefined;
    passesUsed?: number | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutStudentsInput | undefined;
    passes?: PassCreateNestedManyWithoutStudentInput | undefined;
}
