import { ClassroomCreateNestedOneWithoutPassesInput } from "../inputs/ClassroomCreateNestedOneWithoutPassesInput";
import { TeacherCreateNestedOneWithoutIssuedPassesInput } from "../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput";
export declare class PassCreateWithoutStudentInput {
    classroom: ClassroomCreateNestedOneWithoutPassesInput;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    duration: number;
    issuer: TeacherCreateNestedOneWithoutIssuedPassesInput;
}
