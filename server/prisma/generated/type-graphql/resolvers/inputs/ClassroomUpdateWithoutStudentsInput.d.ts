import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PassUpdateManyWithoutClassroomInput } from "../inputs/PassUpdateManyWithoutClassroomInput";
import { TeacherUpdateOneWithoutClassroomsInput } from "../inputs/TeacherUpdateOneWithoutClassroomsInput";
export declare class ClassroomUpdateWithoutStudentsInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    classCode?: NullableStringFieldUpdateOperationsInput | undefined;
    teacher?: TeacherUpdateOneWithoutClassroomsInput | undefined;
    passes?: PassUpdateManyWithoutClassroomInput | undefined;
}
