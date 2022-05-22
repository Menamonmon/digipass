import { ClassroomCreateNestedOneWithoutPassesInput } from "../inputs/ClassroomCreateNestedOneWithoutPassesInput";
import { StudentCreateNestedOneWithoutPassesInput } from "../inputs/StudentCreateNestedOneWithoutPassesInput";
import { TeacherCreateNestedOneWithoutIssuedPassesInput } from "../inputs/TeacherCreateNestedOneWithoutIssuedPassesInput";
export declare class PassCreateInput {
    student: StudentCreateNestedOneWithoutPassesInput;
    classroom: ClassroomCreateNestedOneWithoutPassesInput;
    createdAt?: Date | undefined;
    startTime: Date;
    endTime: Date;
    duration: number;
    issuer: TeacherCreateNestedOneWithoutIssuedPassesInput;
}
