import { PassCreateNestedManyWithoutClassroomInput } from "../inputs/PassCreateNestedManyWithoutClassroomInput";
import { StudentCreateNestedManyWithoutClassroomsInput } from "../inputs/StudentCreateNestedManyWithoutClassroomsInput";
export declare class ClassroomCreateWithoutTeacherInput {
    title: string;
    description: string;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    classCode: string;
    students?: StudentCreateNestedManyWithoutClassroomsInput | undefined;
    passes?: PassCreateNestedManyWithoutClassroomInput | undefined;
}
