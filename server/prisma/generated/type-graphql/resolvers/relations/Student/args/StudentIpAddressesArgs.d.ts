import { IPAddressOrderByWithRelationInput } from "../../../inputs/IPAddressOrderByWithRelationInput";
import { IPAddressWhereInput } from "../../../inputs/IPAddressWhereInput";
import { IPAddressWhereUniqueInput } from "../../../inputs/IPAddressWhereUniqueInput";
export declare class StudentIpAddressesArgs {
    where?: IPAddressWhereInput | undefined;
    orderBy?: IPAddressOrderByWithRelationInput[] | undefined;
    cursor?: IPAddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"ownerId" | "id" | "createdAt" | "address"> | undefined;
}
