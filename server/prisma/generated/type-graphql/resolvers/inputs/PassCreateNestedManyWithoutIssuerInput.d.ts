import { PassCreateManyIssuerInputEnvelope } from "../inputs/PassCreateManyIssuerInputEnvelope";
import { PassCreateOrConnectWithoutIssuerInput } from "../inputs/PassCreateOrConnectWithoutIssuerInput";
import { PassCreateWithoutIssuerInput } from "../inputs/PassCreateWithoutIssuerInput";
import { PassWhereUniqueInput } from "../inputs/PassWhereUniqueInput";
export declare class PassCreateNestedManyWithoutIssuerInput {
    create?: PassCreateWithoutIssuerInput[] | undefined;
    connectOrCreate?: PassCreateOrConnectWithoutIssuerInput[] | undefined;
    createMany?: PassCreateManyIssuerInputEnvelope | undefined;
    connect?: PassWhereUniqueInput[] | undefined;
}
