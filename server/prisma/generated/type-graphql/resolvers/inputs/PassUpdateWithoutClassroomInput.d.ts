import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StudentUpdateOneRequiredWithoutPassesInput } from "../inputs/StudentUpdateOneRequiredWithoutPassesInput";
import { TeacherUpdateOneRequiredWithoutIssuedPassesInput } from "../inputs/TeacherUpdateOneRequiredWithoutIssuedPassesInput";
export declare class PassUpdateWithoutClassroomInput {
    student?: StudentUpdateOneRequiredWithoutPassesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    startTime?: DateTimeFieldUpdateOperationsInput | undefined;
    endTime?: DateTimeFieldUpdateOperationsInput | undefined;
    duration?: IntFieldUpdateOperationsInput | undefined;
    issuer?: TeacherUpdateOneRequiredWithoutIssuedPassesInput | undefined;
}
