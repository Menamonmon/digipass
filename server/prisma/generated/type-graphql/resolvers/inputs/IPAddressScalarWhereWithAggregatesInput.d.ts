import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class IPAddressScalarWhereWithAggregatesInput {
    AND?: IPAddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: IPAddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: IPAddressScalarWhereWithAggregatesInput[] | undefined;
    ownerId?: IntWithAggregatesFilter | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    address?: StringWithAggregatesFilter | undefined;
}
