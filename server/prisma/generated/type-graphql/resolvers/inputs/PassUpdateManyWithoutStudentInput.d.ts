import { PassCreateManyStudentInputEnvelope } from "../inputs/PassCreateManyStudentInputEnvelope";
import { PassCreateOrConnectWithoutStudentInput } from "../inputs/PassCreateOrConnectWithoutStudentInput";
import { PassCreateWithoutStudentInput } from "../inputs/PassCreateWithoutStudentInput";
import { PassScalarWhereInput } from "../inputs/PassScalarWhereInput";
import { PassUpdateManyWithWhereWithoutStudentInput } from "../inputs/PassUpdateManyWithWhereWithoutStudentInput";
import { PassUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/PassUpdateWithWhereUniqueWithoutStudentInput";
import { PassUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/PassUpsertWithWhereUniqueWithoutStudentInput";
import { PassWhereUniqueInput } from "../inputs/PassWhereUniqueInput";
export declare class PassUpdateManyWithoutStudentInput {
    create?: PassCreateWithoutStudentInput[] | undefined;
    connectOrCreate?: PassCreateOrConnectWithoutStudentInput[] | undefined;
    upsert?: PassUpsertWithWhereUniqueWithoutStudentInput[] | undefined;
    createMany?: PassCreateManyStudentInputEnvelope | undefined;
    set?: PassWhereUniqueInput[] | undefined;
    disconnect?: PassWhereUniqueInput[] | undefined;
    delete?: PassWhereUniqueInput[] | undefined;
    connect?: PassWhereUniqueInput[] | undefined;
    update?: PassUpdateWithWhereUniqueWithoutStudentInput[] | undefined;
    updateMany?: PassUpdateManyWithWhereWithoutStudentInput[] | undefined;
    deleteMany?: PassScalarWhereInput[] | undefined;
}
