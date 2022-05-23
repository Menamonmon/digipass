import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PassUpdateManyWithoutClassroomInput } from "../inputs/PassUpdateManyWithoutClassroomInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateManyWithoutClassroomsInput } from "../inputs/StudentUpdateManyWithoutClassroomsInput";
import { TeacherUpdateOneRequiredWithoutClassroomsInput } from "../inputs/TeacherUpdateOneRequiredWithoutClassroomsInput";
export declare class ClassroomUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    startTime?: DateTimeFieldUpdateOperationsInput | undefined;
    endTime?: DateTimeFieldUpdateOperationsInput | undefined;
    classCode?: StringFieldUpdateOperationsInput | undefined;
    students?: StudentUpdateManyWithoutClassroomsInput | undefined;
    teacher?: TeacherUpdateOneRequiredWithoutClassroomsInput | undefined;
    passes?: PassUpdateManyWithoutClassroomInput | undefined;
}
