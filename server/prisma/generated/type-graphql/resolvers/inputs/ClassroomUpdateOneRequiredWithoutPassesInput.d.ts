import { ClassroomCreateOrConnectWithoutPassesInput } from "../inputs/ClassroomCreateOrConnectWithoutPassesInput";
import { ClassroomCreateWithoutPassesInput } from "../inputs/ClassroomCreateWithoutPassesInput";
import { ClassroomUpdateWithoutPassesInput } from "../inputs/ClassroomUpdateWithoutPassesInput";
import { ClassroomUpsertWithoutPassesInput } from "../inputs/ClassroomUpsertWithoutPassesInput";
import { ClassroomWhereUniqueInput } from "../inputs/ClassroomWhereUniqueInput";
export declare class ClassroomUpdateOneRequiredWithoutPassesInput {
    create?: ClassroomCreateWithoutPassesInput | undefined;
    connectOrCreate?: ClassroomCreateOrConnectWithoutPassesInput | undefined;
    upsert?: ClassroomUpsertWithoutPassesInput | undefined;
    connect?: ClassroomWhereUniqueInput | undefined;
    update?: ClassroomUpdateWithoutPassesInput | undefined;
}
