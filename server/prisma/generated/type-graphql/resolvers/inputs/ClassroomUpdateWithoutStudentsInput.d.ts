import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PassUpdateManyWithoutClassroomInput } from "../inputs/PassUpdateManyWithoutClassroomInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeacherUpdateOneRequiredWithoutClassroomsInput } from "../inputs/TeacherUpdateOneRequiredWithoutClassroomsInput";
export declare class ClassroomUpdateWithoutStudentsInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    startTime?: DateTimeFieldUpdateOperationsInput | undefined;
    endTime?: DateTimeFieldUpdateOperationsInput | undefined;
    classCode?: StringFieldUpdateOperationsInput | undefined;
    teacher?: TeacherUpdateOneRequiredWithoutClassroomsInput | undefined;
    passes?: PassUpdateManyWithoutClassroomInput | undefined;
}
