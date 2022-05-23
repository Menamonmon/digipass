import { ClassroomCreateNestedManyWithoutTeacherInput } from "../inputs/ClassroomCreateNestedManyWithoutTeacherInput";
export declare class TeacherCreateWithoutIssuedPassesInput {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    password?: string | undefined;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutTeacherInput | undefined;
}
