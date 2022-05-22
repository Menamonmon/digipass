import { StudentCreateOrConnectWithoutClassroomsInput } from "../inputs/StudentCreateOrConnectWithoutClassroomsInput";
import { StudentCreateWithoutClassroomsInput } from "../inputs/StudentCreateWithoutClassroomsInput";
import { StudentScalarWhereInput } from "../inputs/StudentScalarWhereInput";
import { StudentUpdateManyWithWhereWithoutClassroomsInput } from "../inputs/StudentUpdateManyWithWhereWithoutClassroomsInput";
import { StudentUpdateWithWhereUniqueWithoutClassroomsInput } from "../inputs/StudentUpdateWithWhereUniqueWithoutClassroomsInput";
import { StudentUpsertWithWhereUniqueWithoutClassroomsInput } from "../inputs/StudentUpsertWithWhereUniqueWithoutClassroomsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";
export declare class StudentUpdateManyWithoutClassroomsInput {
    create?: StudentCreateWithoutClassroomsInput[] | undefined;
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomsInput[] | undefined;
    upsert?: StudentUpsertWithWhereUniqueWithoutClassroomsInput[] | undefined;
    set?: StudentWhereUniqueInput[] | undefined;
    disconnect?: StudentWhereUniqueInput[] | undefined;
    delete?: StudentWhereUniqueInput[] | undefined;
    connect?: StudentWhereUniqueInput[] | undefined;
    update?: StudentUpdateWithWhereUniqueWithoutClassroomsInput[] | undefined;
    updateMany?: StudentUpdateManyWithWhereWithoutClassroomsInput[] | undefined;
    deleteMany?: StudentScalarWhereInput[] | undefined;
}
