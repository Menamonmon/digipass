import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
export declare class PassUpdateManyMutationInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    startTime?: DateTimeFieldUpdateOperationsInput | undefined;
    endTime?: DateTimeFieldUpdateOperationsInput | undefined;
    duration?: IntFieldUpdateOperationsInput | undefined;
}
