import { TeacherCreateOrConnectWithoutIssuedPassesInput } from "../inputs/TeacherCreateOrConnectWithoutIssuedPassesInput";
import { TeacherCreateWithoutIssuedPassesInput } from "../inputs/TeacherCreateWithoutIssuedPassesInput";
import { TeacherUpdateWithoutIssuedPassesInput } from "../inputs/TeacherUpdateWithoutIssuedPassesInput";
import { TeacherUpsertWithoutIssuedPassesInput } from "../inputs/TeacherUpsertWithoutIssuedPassesInput";
import { TeacherWhereUniqueInput } from "../inputs/TeacherWhereUniqueInput";
export declare class TeacherUpdateOneRequiredWithoutIssuedPassesInput {
    create?: TeacherCreateWithoutIssuedPassesInput | undefined;
    connectOrCreate?: TeacherCreateOrConnectWithoutIssuedPassesInput | undefined;
    upsert?: TeacherUpsertWithoutIssuedPassesInput | undefined;
    connect?: TeacherWhereUniqueInput | undefined;
    update?: TeacherUpdateWithoutIssuedPassesInput | undefined;
}
