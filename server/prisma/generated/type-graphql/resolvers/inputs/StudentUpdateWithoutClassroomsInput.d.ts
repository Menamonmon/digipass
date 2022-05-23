import { IPAddressUpdateManyWithoutOwnerInput } from "../inputs/IPAddressUpdateManyWithoutOwnerInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PassUpdateManyWithoutStudentInput } from "../inputs/PassUpdateManyWithoutStudentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StudentUpdateWithoutClassroomsInput {
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    studentId?: NullableStringFieldUpdateOperationsInput | undefined;
    passesUsed?: NullableIntFieldUpdateOperationsInput | undefined;
    ipAddresses?: IPAddressUpdateManyWithoutOwnerInput | undefined;
    passes?: PassUpdateManyWithoutStudentInput | undefined;
}
