import { StudentCreateOrConnectWithoutIpAddressesInput } from "../inputs/StudentCreateOrConnectWithoutIpAddressesInput";
import { StudentCreateWithoutIpAddressesInput } from "../inputs/StudentCreateWithoutIpAddressesInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";
export declare class StudentCreateNestedOneWithoutIpAddressesInput {
    create?: StudentCreateWithoutIpAddressesInput | undefined;
    connectOrCreate?: StudentCreateOrConnectWithoutIpAddressesInput | undefined;
    connect?: StudentWhereUniqueInput | undefined;
}
