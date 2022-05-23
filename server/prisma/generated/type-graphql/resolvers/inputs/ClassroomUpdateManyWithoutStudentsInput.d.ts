import { ClassroomCreateOrConnectWithoutStudentsInput } from "../inputs/ClassroomCreateOrConnectWithoutStudentsInput";
import { ClassroomCreateWithoutStudentsInput } from "../inputs/ClassroomCreateWithoutStudentsInput";
import { ClassroomScalarWhereInput } from "../inputs/ClassroomScalarWhereInput";
import { ClassroomUpdateManyWithWhereWithoutStudentsInput } from "../inputs/ClassroomUpdateManyWithWhereWithoutStudentsInput";
import { ClassroomUpdateWithWhereUniqueWithoutStudentsInput } from "../inputs/ClassroomUpdateWithWhereUniqueWithoutStudentsInput";
import { ClassroomUpsertWithWhereUniqueWithoutStudentsInput } from "../inputs/ClassroomUpsertWithWhereUniqueWithoutStudentsInput";
import { ClassroomWhereUniqueInput } from "../inputs/ClassroomWhereUniqueInput";
export declare class ClassroomUpdateManyWithoutStudentsInput {
    create?: ClassroomCreateWithoutStudentsInput[] | undefined;
    connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput[] | undefined;
    upsert?: ClassroomUpsertWithWhereUniqueWithoutStudentsInput[] | undefined;
    set?: ClassroomWhereUniqueInput[] | undefined;
    disconnect?: ClassroomWhereUniqueInput[] | undefined;
    delete?: ClassroomWhereUniqueInput[] | undefined;
    connect?: ClassroomWhereUniqueInput[] | undefined;
    update?: ClassroomUpdateWithWhereUniqueWithoutStudentsInput[] | undefined;
    updateMany?: ClassroomUpdateManyWithWhereWithoutStudentsInput[] | undefined;
    deleteMany?: ClassroomScalarWhereInput[] | undefined;
}
