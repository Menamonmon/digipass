import { IPAddressCreateManyOwnerInputEnvelope } from "../inputs/IPAddressCreateManyOwnerInputEnvelope";
import { IPAddressCreateOrConnectWithoutOwnerInput } from "../inputs/IPAddressCreateOrConnectWithoutOwnerInput";
import { IPAddressCreateWithoutOwnerInput } from "../inputs/IPAddressCreateWithoutOwnerInput";
import { IPAddressScalarWhereInput } from "../inputs/IPAddressScalarWhereInput";
import { IPAddressUpdateManyWithWhereWithoutOwnerInput } from "../inputs/IPAddressUpdateManyWithWhereWithoutOwnerInput";
import { IPAddressUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/IPAddressUpdateWithWhereUniqueWithoutOwnerInput";
import { IPAddressUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/IPAddressUpsertWithWhereUniqueWithoutOwnerInput";
import { IPAddressWhereUniqueInput } from "../inputs/IPAddressWhereUniqueInput";
export declare class IPAddressUpdateManyWithoutOwnerInput {
    create?: IPAddressCreateWithoutOwnerInput[] | undefined;
    connectOrCreate?: IPAddressCreateOrConnectWithoutOwnerInput[] | undefined;
    upsert?: IPAddressUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;
    createMany?: IPAddressCreateManyOwnerInputEnvelope | undefined;
    set?: IPAddressWhereUniqueInput[] | undefined;
    disconnect?: IPAddressWhereUniqueInput[] | undefined;
    delete?: IPAddressWhereUniqueInput[] | undefined;
    connect?: IPAddressWhereUniqueInput[] | undefined;
    update?: IPAddressUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;
    updateMany?: IPAddressUpdateManyWithWhereWithoutOwnerInput[] | undefined;
    deleteMany?: IPAddressScalarWhereInput[] | undefined;
}
