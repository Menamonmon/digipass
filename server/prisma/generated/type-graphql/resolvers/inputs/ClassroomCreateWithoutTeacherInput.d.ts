import { PassCreateNestedManyWithoutClassroomInput } from "../inputs/PassCreateNestedManyWithoutClassroomInput";
import { StudentCreateNestedManyWithoutClassroomsInput } from "../inputs/StudentCreateNestedManyWithoutClassroomsInput";
export declare class ClassroomCreateWithoutTeacherInput {
    title?: string | undefined;
    description?: string | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    classCode?: string | undefined;
    students?: StudentCreateNestedManyWithoutClassroomsInput | undefined;
    passes?: PassCreateNestedManyWithoutClassroomInput | undefined;
}
