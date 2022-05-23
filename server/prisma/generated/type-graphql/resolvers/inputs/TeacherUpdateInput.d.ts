import { ClassroomUpdateManyWithoutTeacherInput } from "../inputs/ClassroomUpdateManyWithoutTeacherInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PassUpdateManyWithoutIssuerInput } from "../inputs/PassUpdateManyWithoutIssuerInput";
export declare class TeacherUpdateInput {
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    classrooms?: ClassroomUpdateManyWithoutTeacherInput | undefined;
    issuedPasses?: PassUpdateManyWithoutIssuerInput | undefined;
}
