import { ClassroomUpdateManyWithoutTeacherInput } from "../inputs/ClassroomUpdateManyWithoutTeacherInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PassUpdateManyWithoutIssuerInput } from "../inputs/PassUpdateManyWithoutIssuerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TeacherUpdateInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: DateTimeFieldUpdateOperationsInput | undefined;
    classrooms?: ClassroomUpdateManyWithoutTeacherInput | undefined;
    issuedPasses?: PassUpdateManyWithoutIssuerInput | undefined;
}
