import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StudentUpdateManyWithoutClassroomsInput } from "../inputs/StudentUpdateManyWithoutClassroomsInput";
import { TeacherUpdateOneWithoutClassroomsInput } from "../inputs/TeacherUpdateOneWithoutClassroomsInput";
export declare class ClassroomUpdateWithoutPassesInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    classCode?: NullableStringFieldUpdateOperationsInput | undefined;
    students?: StudentUpdateManyWithoutClassroomsInput | undefined;
    teacher?: TeacherUpdateOneWithoutClassroomsInput | undefined;
}
