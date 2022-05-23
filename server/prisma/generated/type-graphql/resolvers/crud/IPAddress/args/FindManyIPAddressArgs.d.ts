import { IPAddressOrderByWithRelationInput } from "../../../inputs/IPAddressOrderByWithRelationInput";
import { IPAddressWhereInput } from "../../../inputs/IPAddressWhereInput";
import { IPAddressWhereUniqueInput } from "../../../inputs/IPAddressWhereUniqueInput";
export declare class FindManyIPAddressArgs {
    where?: IPAddressWhereInput | undefined;
    orderBy?: IPAddressOrderByWithRelationInput[] | undefined;
    cursor?: IPAddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "ownerId" | "createdAt" | "address"> | undefined;
}
