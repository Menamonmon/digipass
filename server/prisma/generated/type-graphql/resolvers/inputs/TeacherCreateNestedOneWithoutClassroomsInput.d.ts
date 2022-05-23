import { TeacherCreateOrConnectWithoutClassroomsInput } from "../inputs/TeacherCreateOrConnectWithoutClassroomsInput";
import { TeacherCreateWithoutClassroomsInput } from "../inputs/TeacherCreateWithoutClassroomsInput";
import { TeacherWhereUniqueInput } from "../inputs/TeacherWhereUniqueInput";
export declare class TeacherCreateNestedOneWithoutClassroomsInput {
    create?: TeacherCreateWithoutClassroomsInput | undefined;
    connectOrCreate?: TeacherCreateOrConnectWithoutClassroomsInput | undefined;
    connect?: TeacherWhereUniqueInput | undefined;
}
