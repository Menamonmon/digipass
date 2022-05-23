import { ClassroomCreateNestedManyWithoutTeacherInput } from "../inputs/ClassroomCreateNestedManyWithoutTeacherInput";
import { PassCreateNestedManyWithoutIssuerInput } from "../inputs/PassCreateNestedManyWithoutIssuerInput";
export declare class TeacherCreateInput {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    password?: string | undefined;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutTeacherInput | undefined;
    issuedPasses?: PassCreateNestedManyWithoutIssuerInput | undefined;
}
