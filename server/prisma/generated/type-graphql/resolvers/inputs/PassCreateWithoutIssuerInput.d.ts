import { ClassroomCreateNestedOneWithoutPassesInput } from "../inputs/ClassroomCreateNestedOneWithoutPassesInput";
import { StudentCreateNestedOneWithoutPassesInput } from "../inputs/StudentCreateNestedOneWithoutPassesInput";
export declare class PassCreateWithoutIssuerInput {
    student: StudentCreateNestedOneWithoutPassesInput;
    classroom: ClassroomCreateNestedOneWithoutPassesInput;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    duration: number;
}
