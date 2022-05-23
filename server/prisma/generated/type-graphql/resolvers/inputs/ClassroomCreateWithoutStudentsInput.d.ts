import { PassCreateNestedManyWithoutClassroomInput } from "../inputs/PassCreateNestedManyWithoutClassroomInput";
import { TeacherCreateNestedOneWithoutClassroomsInput } from "../inputs/TeacherCreateNestedOneWithoutClassroomsInput";
export declare class ClassroomCreateWithoutStudentsInput {
    title: string;
    description: string;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    classCode: string;
    teacher: TeacherCreateNestedOneWithoutClassroomsInput;
    passes?: PassCreateNestedManyWithoutClassroomInput | undefined;
}
