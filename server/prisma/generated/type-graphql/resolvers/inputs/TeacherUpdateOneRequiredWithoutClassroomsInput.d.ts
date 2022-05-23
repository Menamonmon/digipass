import { TeacherCreateOrConnectWithoutClassroomsInput } from "../inputs/TeacherCreateOrConnectWithoutClassroomsInput";
import { TeacherCreateWithoutClassroomsInput } from "../inputs/TeacherCreateWithoutClassroomsInput";
import { TeacherUpdateWithoutClassroomsInput } from "../inputs/TeacherUpdateWithoutClassroomsInput";
import { TeacherUpsertWithoutClassroomsInput } from "../inputs/TeacherUpsertWithoutClassroomsInput";
import { TeacherWhereUniqueInput } from "../inputs/TeacherWhereUniqueInput";
export declare class TeacherUpdateOneRequiredWithoutClassroomsInput {
    create?: TeacherCreateWithoutClassroomsInput | undefined;
    connectOrCreate?: TeacherCreateOrConnectWithoutClassroomsInput | undefined;
    upsert?: TeacherUpsertWithoutClassroomsInput | undefined;
    connect?: TeacherWhereUniqueInput | undefined;
    update?: TeacherUpdateWithoutClassroomsInput | undefined;
}
