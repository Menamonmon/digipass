import { StudentOrderByWithRelationInput } from "../../../inputs/StudentOrderByWithRelationInput";
import { StudentWhereInput } from "../../../inputs/StudentWhereInput";
import { StudentWhereUniqueInput } from "../../../inputs/StudentWhereUniqueInput";
export declare class AggregateStudentArgs {
    where?: StudentWhereInput | undefined;
    orderBy?: StudentOrderByWithRelationInput[] | undefined;
    cursor?: StudentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
