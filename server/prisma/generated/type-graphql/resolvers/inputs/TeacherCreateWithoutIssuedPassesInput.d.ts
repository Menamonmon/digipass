import { ClassroomCreateNestedManyWithoutTeacherInput } from "../inputs/ClassroomCreateNestedManyWithoutTeacherInput";
export declare class TeacherCreateWithoutIssuedPassesInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    classrooms?: ClassroomCreateNestedManyWithoutTeacherInput | undefined;
}
