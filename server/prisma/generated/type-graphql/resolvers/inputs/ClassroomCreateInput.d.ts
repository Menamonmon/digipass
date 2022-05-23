import { PassCreateNestedManyWithoutClassroomInput } from "../inputs/PassCreateNestedManyWithoutClassroomInput";
import { StudentCreateNestedManyWithoutClassroomsInput } from "../inputs/StudentCreateNestedManyWithoutClassroomsInput";
import { TeacherCreateNestedOneWithoutClassroomsInput } from "../inputs/TeacherCreateNestedOneWithoutClassroomsInput";
export declare class ClassroomCreateInput {
    title?: string | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    classCode?: string | undefined;
    students?: StudentCreateNestedManyWithoutClassroomsInput | undefined;
    teacher?: TeacherCreateNestedOneWithoutClassroomsInput | undefined;
    passes?: PassCreateNestedManyWithoutClassroomInput | undefined;
}
