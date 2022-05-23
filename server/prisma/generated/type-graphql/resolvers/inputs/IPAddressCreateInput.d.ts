import { StudentCreateNestedOneWithoutIpAddressesInput } from "../inputs/StudentCreateNestedOneWithoutIpAddressesInput";
export declare class IPAddressCreateInput {
    owner?: StudentCreateNestedOneWithoutIpAddressesInput | undefined;
    createdAt?: Date | undefined;
    address?: string | undefined;
}
