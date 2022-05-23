import { IPAddressAvgOrderByAggregateInput } from "../inputs/IPAddressAvgOrderByAggregateInput";
import { IPAddressCountOrderByAggregateInput } from "../inputs/IPAddressCountOrderByAggregateInput";
import { IPAddressMaxOrderByAggregateInput } from "../inputs/IPAddressMaxOrderByAggregateInput";
import { IPAddressMinOrderByAggregateInput } from "../inputs/IPAddressMinOrderByAggregateInput";
import { IPAddressSumOrderByAggregateInput } from "../inputs/IPAddressSumOrderByAggregateInput";
export declare class IPAddressOrderByWithAggregationInput {
    ownerId?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    _count?: IPAddressCountOrderByAggregateInput | undefined;
    _avg?: IPAddressAvgOrderByAggregateInput | undefined;
    _max?: IPAddressMaxOrderByAggregateInput | undefined;
    _min?: IPAddressMinOrderByAggregateInput | undefined;
    _sum?: IPAddressSumOrderByAggregateInput | undefined;
}
