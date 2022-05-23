import { TeacherCreateInput } from "../../../inputs/TeacherCreateInput";
import { TeacherUpdateInput } from "../../../inputs/TeacherUpdateInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";
export declare class UpsertTeacherArgs {
    where: TeacherWhereUniqueInput;
    create: TeacherCreateInput;
    update: TeacherUpdateInput;
}
