import { ClassroomCreateOrConnectWithoutPassesInput } from "../inputs/ClassroomCreateOrConnectWithoutPassesInput";
import { ClassroomCreateWithoutPassesInput } from "../inputs/ClassroomCreateWithoutPassesInput";
import { ClassroomWhereUniqueInput } from "../inputs/ClassroomWhereUniqueInput";
export declare class ClassroomCreateNestedOneWithoutPassesInput {
    create?: ClassroomCreateWithoutPassesInput | undefined;
    connectOrCreate?: ClassroomCreateOrConnectWithoutPassesInput | undefined;
    connect?: ClassroomWhereUniqueInput | undefined;
}
