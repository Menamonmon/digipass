import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StudentUpdateOneWithoutIpAddressesInput } from "../inputs/StudentUpdateOneWithoutIpAddressesInput";
export declare class IPAddressUpdateInput {
    owner?: StudentUpdateOneWithoutIpAddressesInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
}
