import { IPAddressOrderByWithAggregationInput } from "../../../inputs/IPAddressOrderByWithAggregationInput";
import { IPAddressScalarWhereWithAggregatesInput } from "../../../inputs/IPAddressScalarWhereWithAggregatesInput";
import { IPAddressWhereInput } from "../../../inputs/IPAddressWhereInput";
export declare class GroupByIPAddressArgs {
    where?: IPAddressWhereInput | undefined;
    orderBy?: IPAddressOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "ownerId" | "createdAt" | "address">;
    having?: IPAddressScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
