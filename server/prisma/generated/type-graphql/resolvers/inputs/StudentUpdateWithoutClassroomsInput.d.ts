import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IPAddressUpdateManyWithoutOwnerInput } from "../inputs/IPAddressUpdateManyWithoutOwnerInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PassUpdateManyWithoutStudentInput } from "../inputs/PassUpdateManyWithoutStudentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StudentUpdateWithoutClassroomsInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: DateTimeFieldUpdateOperationsInput | undefined;
    studentId?: StringFieldUpdateOperationsInput | undefined;
    passesUsed?: IntFieldUpdateOperationsInput | undefined;
    ipAddresses?: IPAddressUpdateManyWithoutOwnerInput | undefined;
    passes?: PassUpdateManyWithoutStudentInput | undefined;
}
