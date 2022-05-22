import { StudentCreateNestedOneWithoutIpAddressesInput } from "../inputs/StudentCreateNestedOneWithoutIpAddressesInput";
export declare class IPAddressCreateInput {
    owner: StudentCreateNestedOneWithoutIpAddressesInput;
    createdAt?: Date | undefined;
    address: string;
}
