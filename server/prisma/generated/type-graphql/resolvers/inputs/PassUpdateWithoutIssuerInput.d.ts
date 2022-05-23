import { ClassroomUpdateOneRequiredWithoutPassesInput } from "../inputs/ClassroomUpdateOneRequiredWithoutPassesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StudentUpdateOneRequiredWithoutPassesInput } from "../inputs/StudentUpdateOneRequiredWithoutPassesInput";
export declare class PassUpdateWithoutIssuerInput {
    student?: StudentUpdateOneRequiredWithoutPassesInput | undefined;
    classroom?: ClassroomUpdateOneRequiredWithoutPassesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    startTime?: DateTimeFieldUpdateOperationsInput | undefined;
    endTime?: DateTimeFieldUpdateOperationsInput | undefined;
    duration?: IntFieldUpdateOperationsInput | undefined;
}
