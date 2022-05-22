import { PassCreateInput } from "../../../inputs/PassCreateInput";
import { PassUpdateInput } from "../../../inputs/PassUpdateInput";
import { PassWhereUniqueInput } from "../../../inputs/PassWhereUniqueInput";
export declare class UpsertPassArgs {
    where: PassWhereUniqueInput;
    create: PassCreateInput;
    update: PassUpdateInput;
}
