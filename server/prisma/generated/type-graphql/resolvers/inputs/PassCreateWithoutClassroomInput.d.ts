import { StudentCreateNestedOneWithoutPassesInput } from "../inputs/StudentCreateNestedOneWithoutPassesInput";
import { TeacherCreateNestedOneWithoutIssuedPassesInput } from "../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput";
export declare class PassCreateWithoutClassroomInput {
    student: StudentCreateNestedOneWithoutPassesInput;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    duration: number;
    issuer: TeacherCreateNestedOneWithoutIssuedPassesInput;
}
