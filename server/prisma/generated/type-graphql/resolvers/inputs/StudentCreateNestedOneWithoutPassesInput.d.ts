import { StudentCreateOrConnectWithoutPassesInput } from "../inputs/StudentCreateOrConnectWithoutPassesInput";
import { StudentCreateWithoutPassesInput } from "../inputs/StudentCreateWithoutPassesInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";
export declare class StudentCreateNestedOneWithoutPassesInput {
    create?: StudentCreateWithoutPassesInput | undefined;
    connectOrCreate?: StudentCreateOrConnectWithoutPassesInput | undefined;
    connect?: StudentWhereUniqueInput | undefined;
}
