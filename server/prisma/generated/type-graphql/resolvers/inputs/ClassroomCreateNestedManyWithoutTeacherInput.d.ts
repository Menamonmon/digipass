import { ClassroomCreateManyTeacherInputEnvelope } from "../inputs/ClassroomCreateManyTeacherInputEnvelope";
import { ClassroomCreateOrConnectWithoutTeacherInput } from "../inputs/ClassroomCreateOrConnectWithoutTeacherInput";
import { ClassroomCreateWithoutTeacherInput } from "../inputs/ClassroomCreateWithoutTeacherInput";
import { ClassroomWhereUniqueInput } from "../inputs/ClassroomWhereUniqueInput";
export declare class ClassroomCreateNestedManyWithoutTeacherInput {
    create?: ClassroomCreateWithoutTeacherInput[] | undefined;
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput[] | undefined;
    createMany?: ClassroomCreateManyTeacherInputEnvelope | undefined;
    connect?: ClassroomWhereUniqueInput[] | undefined;
}
