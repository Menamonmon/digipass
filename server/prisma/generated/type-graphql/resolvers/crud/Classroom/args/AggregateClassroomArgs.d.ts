import { ClassroomOrderByWithRelationInput } from "../../../inputs/ClassroomOrderByWithRelationInput";
import { ClassroomWhereInput } from "../../../inputs/ClassroomWhereInput";
import { ClassroomWhereUniqueInput } from "../../../inputs/ClassroomWhereUniqueInput";
export declare class AggregateClassroomArgs {
    where?: ClassroomWhereInput | undefined;
    orderBy?: ClassroomOrderByWithRelationInput[] | undefined;
    cursor?: ClassroomWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
