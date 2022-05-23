import { ClassroomCreateNestedOneWithoutPassesInput } from "../inputs/ClassroomCreateNestedOneWithoutPassesInput";
import { TeacherCreateNestedOneWithoutIssuedPassesInput } from "../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput";
export declare class PassCreateWithoutStudentInput {
    classroom?: ClassroomCreateNestedOneWithoutPassesInput | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    duration?: number | undefined;
    issuer?: TeacherCreateNestedOneWithoutIssuedPassesInput | undefined;
}
