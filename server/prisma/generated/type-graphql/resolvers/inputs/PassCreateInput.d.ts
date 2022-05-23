import { ClassroomCreateNestedOneWithoutPassesInput } from "../inputs/ClassroomCreateNestedOneWithoutPassesInput";
import { StudentCreateNestedOneWithoutPassesInput } from "../inputs/StudentCreateNestedOneWithoutPassesInput";
import { TeacherCreateNestedOneWithoutIssuedPassesInput } from "../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput";
export declare class PassCreateInput {
    student?: StudentCreateNestedOneWithoutPassesInput | undefined;
    classroom?: ClassroomCreateNestedOneWithoutPassesInput | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    duration?: number | undefined;
    issuer?: TeacherCreateNestedOneWithoutIssuedPassesInput | undefined;
}
