import { TeacherOrderByWithRelationInput } from "../../../inputs/TeacherOrderByWithRelationInput";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";
import { TeacherWhereUniqueInput } from "../../../inputs/TeacherWhereUniqueInput";
export declare class AggregateTeacherArgs {
    where?: TeacherWhereInput | undefined;
    orderBy?: TeacherOrderByWithRelationInput[] | undefined;
    cursor?: TeacherWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
