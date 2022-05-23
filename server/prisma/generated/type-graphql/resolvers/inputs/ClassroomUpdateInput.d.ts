import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PassUpdateManyWithoutClassroomInput } from "../inputs/PassUpdateManyWithoutClassroomInput";
import { StudentUpdateManyWithoutClassroomsInput } from "../inputs/StudentUpdateManyWithoutClassroomsInput";
import { TeacherUpdateOneWithoutClassroomsInput } from "../inputs/TeacherUpdateOneWithoutClassroomsInput";
export declare class ClassroomUpdateInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    classCode?: NullableStringFieldUpdateOperationsInput | undefined;
    students?: StudentUpdateManyWithoutClassroomsInput | undefined;
    teacher?: TeacherUpdateOneWithoutClassroomsInput | undefined;
    passes?: PassUpdateManyWithoutClassroomInput | undefined;
}
