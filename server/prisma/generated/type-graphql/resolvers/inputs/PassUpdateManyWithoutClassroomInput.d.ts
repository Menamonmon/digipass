import { PassCreateManyClassroomInputEnvelope } from "../inputs/PassCreateManyClassroomInputEnvelope";
import { PassCreateOrConnectWithoutClassroomInput } from "../inputs/PassCreateOrConnectWithoutClassroomInput";
import { PassCreateWithoutClassroomInput } from "../inputs/PassCreateWithoutClassroomInput";
import { PassScalarWhereInput } from "../inputs/PassScalarWhereInput";
import { PassUpdateManyWithWhereWithoutClassroomInput } from "../inputs/PassUpdateManyWithWhereWithoutClassroomInput";
import { PassUpdateWithWhereUniqueWithoutClassroomInput } from "../inputs/PassUpdateWithWhereUniqueWithoutClassroomInput";
import { PassUpsertWithWhereUniqueWithoutClassroomInput } from "../inputs/PassUpsertWithWhereUniqueWithoutClassroomInput";
import { PassWhereUniqueInput } from "../inputs/PassWhereUniqueInput";
export declare class PassUpdateManyWithoutClassroomInput {
    create?: PassCreateWithoutClassroomInput[] | undefined;
    connectOrCreate?: PassCreateOrConnectWithoutClassroomInput[] | undefined;
    upsert?: PassUpsertWithWhereUniqueWithoutClassroomInput[] | undefined;
    createMany?: PassCreateManyClassroomInputEnvelope | undefined;
    set?: PassWhereUniqueInput[] | undefined;
    disconnect?: PassWhereUniqueInput[] | undefined;
    delete?: PassWhereUniqueInput[] | undefined;
    connect?: PassWhereUniqueInput[] | undefined;
    update?: PassUpdateWithWhereUniqueWithoutClassroomInput[] | undefined;
    updateMany?: PassUpdateManyWithWhereWithoutClassroomInput[] | undefined;
    deleteMany?: PassScalarWhereInput[] | undefined;
}
