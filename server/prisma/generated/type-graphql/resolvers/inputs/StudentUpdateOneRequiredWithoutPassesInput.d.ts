import { StudentCreateOrConnectWithoutPassesInput } from "../inputs/StudentCreateOrConnectWithoutPassesInput";
import { StudentCreateWithoutPassesInput } from "../inputs/StudentCreateWithoutPassesInput";
import { StudentUpdateWithoutPassesInput } from "../inputs/StudentUpdateWithoutPassesInput";
import { StudentUpsertWithoutPassesInput } from "../inputs/StudentUpsertWithoutPassesInput";
import { StudentWhereUniqueInput } from "../inputs/StudentWhereUniqueInput";
export declare class StudentUpdateOneRequiredWithoutPassesInput {
    create?: StudentCreateWithoutPassesInput | undefined;
    connectOrCreate?: StudentCreateOrConnectWithoutPassesInput | undefined;
    upsert?: StudentUpsertWithoutPassesInput | undefined;
    connect?: StudentWhereUniqueInput | undefined;
    update?: StudentUpdateWithoutPassesInput | undefined;
}
