import { ClassroomCreateManyTeacherInputEnvelope } from "../inputs/ClassroomCreateManyTeacherInputEnvelope";
import { ClassroomCreateOrConnectWithoutTeacherInput } from "../inputs/ClassroomCreateOrConnectWithoutTeacherInput";
import { ClassroomCreateWithoutTeacherInput } from "../inputs/ClassroomCreateWithoutTeacherInput";
import { ClassroomScalarWhereInput } from "../inputs/ClassroomScalarWhereInput";
import { ClassroomUpdateManyWithWhereWithoutTeacherInput } from "../inputs/ClassroomUpdateManyWithWhereWithoutTeacherInput";
import { ClassroomUpdateWithWhereUniqueWithoutTeacherInput } from "../inputs/ClassroomUpdateWithWhereUniqueWithoutTeacherInput";
import { ClassroomUpsertWithWhereUniqueWithoutTeacherInput } from "../inputs/ClassroomUpsertWithWhereUniqueWithoutTeacherInput";
import { ClassroomWhereUniqueInput } from "../inputs/ClassroomWhereUniqueInput";
export declare class ClassroomUpdateManyWithoutTeacherInput {
    create?: ClassroomCreateWithoutTeacherInput[] | undefined;
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput[] | undefined;
    upsert?: ClassroomUpsertWithWhereUniqueWithoutTeacherInput[] | undefined;
    createMany?: ClassroomCreateManyTeacherInputEnvelope | undefined;
    set?: ClassroomWhereUniqueInput[] | undefined;
    disconnect?: ClassroomWhereUniqueInput[] | undefined;
    delete?: ClassroomWhereUniqueInput[] | undefined;
    connect?: ClassroomWhereUniqueInput[] | undefined;
    update?: ClassroomUpdateWithWhereUniqueWithoutTeacherInput[] | undefined;
    updateMany?: ClassroomUpdateManyWithWhereWithoutTeacherInput[] | undefined;
    deleteMany?: ClassroomScalarWhereInput[] | undefined;
}
