import { IPAddressCreateInput } from "../../../inputs/IPAddressCreateInput";
import { IPAddressUpdateInput } from "../../../inputs/IPAddressUpdateInput";
import { IPAddressWhereUniqueInput } from "../../../inputs/IPAddressWhereUniqueInput";
export declare class UpsertIPAddressArgs {
    where: IPAddressWhereUniqueInput;
    create: IPAddressCreateInput;
    update: IPAddressUpdateInput;
}
