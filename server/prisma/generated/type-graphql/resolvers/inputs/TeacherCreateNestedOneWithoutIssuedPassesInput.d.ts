import { TeacherCreateOrConnectWithoutIssuedPassesInput } from "../inputs/TeacherCreateOrConnectWithoutIssuedPassesInput";
import { TeacherCreateWithoutIssuedPassesInput } from "../inputs/TeacherCreateWithoutIssuedPassesInput";
import { TeacherWhereUniqueInput } from "../inputs/TeacherWhereUniqueInput";
export declare class TeacherCreateNestedOneWithoutIssuedPassesInput {
    create?: TeacherCreateWithoutIssuedPassesInput | undefined;
    connectOrCreate?: TeacherCreateOrConnectWithoutIssuedPassesInput | undefined;
    connect?: TeacherWhereUniqueInput | undefined;
}
