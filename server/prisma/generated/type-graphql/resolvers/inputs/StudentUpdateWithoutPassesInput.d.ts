import { ClassroomUpdateManyWithoutStudentsInput } from "../inputs/ClassroomUpdateManyWithoutStudentsInput";
import { IPAddressUpdateManyWithoutOwnerInput } from "../inputs/IPAddressUpdateManyWithoutOwnerInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StudentUpdateWithoutPassesInput {
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    studentId?: NullableStringFieldUpdateOperationsInput | undefined;
    passesUsed?: NullableIntFieldUpdateOperationsInput | undefined;
    ipAddresses?: IPAddressUpdateManyWithoutOwnerInput | undefined;
    classrooms?: ClassroomUpdateManyWithoutStudentsInput | undefined;
}
