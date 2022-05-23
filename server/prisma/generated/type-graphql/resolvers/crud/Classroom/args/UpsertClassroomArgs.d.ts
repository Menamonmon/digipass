import { ClassroomCreateInput } from "../../../inputs/ClassroomCreateInput";
import { ClassroomUpdateInput } from "../../../inputs/ClassroomUpdateInput";
import { ClassroomWhereUniqueInput } from "../../../inputs/ClassroomWhereUniqueInput";
export declare class UpsertClassroomArgs {
    where: ClassroomWhereUniqueInput;
    create: ClassroomCreateInput;
    update: ClassroomUpdateInput;
}
