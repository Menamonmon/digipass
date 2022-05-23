import { ClassroomCreateNestedOneWithoutPassesInput } from "../inputs/ClassroomCreateNestedOneWithoutPassesInput";
import { StudentCreateNestedOneWithoutPassesInput } from "../inputs/StudentCreateNestedOneWithoutPassesInput";
export declare class PassCreateWithoutIssuerInput {
    student?: StudentCreateNestedOneWithoutPassesInput | undefined;
    classroom?: ClassroomCreateNestedOneWithoutPassesInput | undefined;
    createdAt?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    duration?: number | undefined;
}
