import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { StudentUpdateOneRequiredWithoutIpAddressesInput } from "../inputs/StudentUpdateOneRequiredWithoutIpAddressesInput";
export declare class IPAddressUpdateInput {
    owner?: StudentUpdateOneRequiredWithoutIpAddressesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
}
