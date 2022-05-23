import { ClassroomUpdateOneWithoutPassesInput } from "../inputs/ClassroomUpdateOneWithoutPassesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StudentUpdateOneWithoutPassesInput } from "../inputs/StudentUpdateOneWithoutPassesInput";
export declare class PassUpdateWithoutIssuerInput {
    student?: StudentUpdateOneWithoutPassesInput | undefined;
    classroom?: ClassroomUpdateOneWithoutPassesInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    duration?: NullableIntFieldUpdateOperationsInput | undefined;
}
