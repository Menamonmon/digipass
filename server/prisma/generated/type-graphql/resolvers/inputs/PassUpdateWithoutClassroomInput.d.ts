import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StudentUpdateOneWithoutPassesInput } from "../inputs/StudentUpdateOneWithoutPassesInput";
import { TeacherUpdateOneWithoutIssuedPassesInput } from "../inputs/TeacherUpdateOneWithoutIssuedPassesInput";
export declare class PassUpdateWithoutClassroomInput {
    student?: StudentUpdateOneWithoutPassesInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    duration?: NullableIntFieldUpdateOperationsInput | undefined;
    issuer?: TeacherUpdateOneWithoutIssuedPassesInput | undefined;
}
