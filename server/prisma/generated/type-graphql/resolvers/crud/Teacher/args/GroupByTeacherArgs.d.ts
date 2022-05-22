import { TeacherOrderByWithAggregationInput } from "../../../inputs/TeacherOrderByWithAggregationInput";
import { TeacherScalarWhereWithAggregatesInput } from "../../../inputs/TeacherScalarWhereWithAggregatesInput";
import { TeacherWhereInput } from "../../../inputs/TeacherWhereInput";
export declare class GroupByTeacherArgs {
    where?: TeacherWhereInput | undefined;
    orderBy?: TeacherOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "firstName" | "lastName" | "password" | "createdAt" | "lastLogin">;
    having?: TeacherScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
