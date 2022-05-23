import { ClassroomCreateNestedManyWithoutTeacherInput } from "../inputs/ClassroomCreateNestedManyWithoutTeacherInput";
import { PassCreateNestedManyWithoutIssuerInput } from "../inputs/PassCreateNestedManyWithoutIssuerInput";
export declare class TeacherCreateInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutTeacherInput | undefined;
    issuedPasses?: PassCreateNestedManyWithoutIssuerInput | undefined;
}
