import { PassCreateNestedManyWithoutClassroomInput } from "../inputs/PassCreateNestedManyWithoutClassroomInput";
import { TeacherCreateNestedOneWithoutClassroomsInput } from "../inputs/TeacherCreateNestedOneWithoutClassroomsInput";
export declare class ClassroomCreateWithoutStudentsInput {
    title?: string | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    classCode?: string | undefined;
    teacher?: TeacherCreateNestedOneWithoutClassroomsInput | undefined;
    passes?: PassCreateNestedManyWithoutClassroomInput | undefined;
}
