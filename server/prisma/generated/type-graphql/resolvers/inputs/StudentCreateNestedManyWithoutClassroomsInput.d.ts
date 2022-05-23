import { StudentCreateOrConnectWithoutClassroomsInput } from "../inputs/StudentCreateOrConnectWithoutClassroomsInput";
import { StudentCreateWithoutClassroomsInput } from "../inputs/StudentCreateWithoutClassroomsInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";
export declare class StudentCreateNestedManyWithoutClassroomsInput {
    create?: StudentCreateWithoutClassroomsInput[] | undefined;
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomsInput[] | undefined;
    connect?: StudentWhereUniqueInput[] | undefined;
}
