import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateManyWithoutClassroomsInput } from "../inputs/StudentUpdateManyWithoutClassroomsInput";
import { TeacherUpdateOneRequiredWithoutClassroomsInput } from "../inputs/TeacherUpdateOneRequiredWithoutClassroomsInput";
export declare class ClassroomUpdateWithoutPassesInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    startTime?: DateTimeFieldUpdateOperationsInput | undefined;
    endTime?: DateTimeFieldUpdateOperationsInput | undefined;
    classCode?: StringFieldUpdateOperationsInput | undefined;
    students?: StudentUpdateManyWithoutClassroomsInput | undefined;
    teacher?: TeacherUpdateOneRequiredWithoutClassroomsInput | undefined;
}
