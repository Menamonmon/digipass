import { IPAddressCreateManyOwnerInputEnvelope } from "../inputs/IPAddressCreateManyOwnerInputEnvelope";
import { IPAddressCreateOrConnectWithoutOwnerInput } from "../inputs/IPAddressCreateOrConnectWithoutOwnerInput";
import { IPAddressCreateWithoutOwnerInput } from "../inputs/IPAddressCreateWithoutOwnerInput";
import { IPAddressWhereUniqueInput } from "../inputs/IPAddressWhereUniqueInput";
export declare class IPAddressCreateNestedManyWithoutOwnerInput {
    create?: IPAddressCreateWithoutOwnerInput[] | undefined;
    connectOrCreate?: IPAddressCreateOrConnectWithoutOwnerInput[] | undefined;
    createMany?: IPAddressCreateManyOwnerInputEnvelope | undefined;
    connect?: IPAddressWhereUniqueInput[] | undefined;
}
