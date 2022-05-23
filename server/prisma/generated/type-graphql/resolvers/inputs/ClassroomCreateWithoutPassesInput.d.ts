import { StudentCreateNestedManyWithoutClassroomsInput } from "../inputs/StudentCreateNestedManyWithoutClassroomsInput";
import { TeacherCreateNestedOneWithoutClassroomsInput } from "../inputs/TeacherCreateNestedOneWithoutClassroomsInput";
export declare class ClassroomCreateWithoutPassesInput {
    title: string;
    description: string;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    classCode: string;
    students?: StudentCreateNestedManyWithoutClassroomsInput | undefined;
    teacher: TeacherCreateNestedOneWithoutClassroomsInput;
}
