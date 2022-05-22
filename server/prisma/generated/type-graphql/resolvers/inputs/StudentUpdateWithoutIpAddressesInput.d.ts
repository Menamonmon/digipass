import { ClassroomUpdateManyWithoutStudentsInput } from "../inputs/ClassroomUpdateManyWithoutStudentsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PassUpdateManyWithoutStudentInput } from "../inputs/PassUpdateManyWithoutStudentInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StudentUpdateWithoutIpAddressesInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: DateTimeFieldUpdateOperationsInput | undefined;
    studentId?: StringFieldUpdateOperationsInput | undefined;
    passesUsed?: IntFieldUpdateOperationsInput | undefined;
    classrooms?: ClassroomUpdateManyWithoutStudentsInput | undefined;
    passes?: PassUpdateManyWithoutStudentInput | undefined;
}
