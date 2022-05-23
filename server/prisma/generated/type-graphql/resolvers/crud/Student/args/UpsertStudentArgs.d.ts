import { StudentCreateInput } from "../../../inputs/StudentCreateInput";
import { StudentUpdateInput } from "../../../inputs/StudentUpdateInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";
export declare class UpsertStudentArgs {
    where: StudentWhereUniqueInput;
    create: StudentCreateInput;
    update: StudentUpdateInput;
}
