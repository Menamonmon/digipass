import { PassCreateManyIssuerInputEnvelope } from "../inputs/PassCreateManyIssuerInputEnvelope";
import { PassCreateOrConnectWithoutIssuerInput } from "../inputs/PassCreateOrConnectWithoutIssuerInput";
import { PassCreateWithoutIssuerInput } from "../inputs/PassCreateWithoutIssuerInput";
import { PassScalarWhereInput } from "../inputs/PassScalarWhereInput";
import { PassUpdateManyWithWhereWithoutIssuerInput } from "../inputs/PassUpdateManyWithWhereWithoutIssuerInput";
import { PassUpdateWithWhereUniqueWithoutIssuerInput } from "../inputs/PassUpdateWithWhereUniqueWithoutIssuerInput";
import { PassUpsertWithWhereUniqueWithoutIssuerInput } from "../inputs/PassUpsertWithWhereUniqueWithoutIssuerInput";
import { PassWhereUniqueInput } from "../inputs/PassWhereUniqueInput";
export declare class PassUpdateManyWithoutIssuerInput {
    create?: PassCreateWithoutIssuerInput[] | undefined;
    connectOrCreate?: PassCreateOrConnectWithoutIssuerInput[] | undefined;
    upsert?: PassUpsertWithWhereUniqueWithoutIssuerInput[] | undefined;
    createMany?: PassCreateManyIssuerInputEnvelope | undefined;
    set?: PassWhereUniqueInput[] | undefined;
    disconnect?: PassWhereUniqueInput[] | undefined;
    delete?: PassWhereUniqueInput[] | undefined;
    connect?: PassWhereUniqueInput[] | undefined;
    update?: PassUpdateWithWhereUniqueWithoutIssuerInput[] | undefined;
    updateMany?: PassUpdateManyWithWhereWithoutIssuerInput[] | undefined;
    deleteMany?: PassScalarWhereInput[] | undefined;
}
