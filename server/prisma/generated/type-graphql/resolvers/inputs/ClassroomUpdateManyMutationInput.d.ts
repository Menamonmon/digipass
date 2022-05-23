import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ClassroomUpdateManyMutationInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    startTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    classCode?: NullableStringFieldUpdateOperationsInput | undefined;
}
