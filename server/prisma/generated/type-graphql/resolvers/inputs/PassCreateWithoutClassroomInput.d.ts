import { StudentCreateNestedOneWithoutPassesInput } from "../inputs/StudentCreateNestedOneWithoutPassesInput";
import { TeacherCreateNestedOneWithoutIssuedPassesInput } from "../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput";
export declare class PassCreateWithoutClassroomInput {
    student?: StudentCreateNestedOneWithoutPassesInput | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    duration?: number | undefined;
    issuer?: TeacherCreateNestedOneWithoutIssuedPassesInput | undefined;
}
