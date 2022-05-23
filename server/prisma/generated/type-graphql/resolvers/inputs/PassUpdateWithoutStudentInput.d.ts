import { ClassroomUpdateOneWithoutPassesInput } from "../inputs/ClassroomUpdateOneWithoutPassesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { TeacherUpdateOneWithoutIssuedPassesInput } from "../inputs/TeacherUpdateOneWithoutIssuedPassesInput";
export declare class PassUpdateWithoutStudentInput {
    classroom?: ClassroomUpdateOneWithoutPassesInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    duration?: NullableIntFieldUpdateOperationsInput | undefined;
    issuer?: TeacherUpdateOneWithoutIssuedPassesInput | undefined;
}
