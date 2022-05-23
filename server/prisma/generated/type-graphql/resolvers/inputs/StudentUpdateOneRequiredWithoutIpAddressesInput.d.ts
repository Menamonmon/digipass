import { StudentCreateOrConnectWithoutIpAddressesInput } from "../inputs/StudentCreateOrConnectWithoutIpAddressesInput";
import { StudentCreateWithoutIpAddressesInput } from "../inputs/StudentCreateWithoutIpAddressesInput";
import { StudentUpdateWithoutIpAddressesInput } from "../inputs/StudentUpdateWithoutIpAddressesInput";
import { StudentUpsertWithoutIpAddressesInput } from "../inputs/StudentUpsertWithoutIpAddressesInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";
export declare class StudentUpdateOneRequiredWithoutIpAddressesInput {
    create?: StudentCreateWithoutIpAddressesInput | undefined;
    connectOrCreate?: StudentCreateOrConnectWithoutIpAddressesInput | undefined;
    upsert?: StudentUpsertWithoutIpAddressesInput | undefined;
    connect?: StudentWhereUniqueInput | undefined;
    update?: StudentUpdateWithoutIpAddressesInput | undefined;
}
