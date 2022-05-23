import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TeacherUpdateManyMutationInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: DateTimeFieldUpdateOperationsInput | undefined;
}
