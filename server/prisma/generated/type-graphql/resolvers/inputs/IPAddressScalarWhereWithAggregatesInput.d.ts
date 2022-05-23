import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class IPAddressScalarWhereWithAggregatesInput {
    AND?: IPAddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: IPAddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: IPAddressScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    ownerId?: IntNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeNullableWithAggregatesFilter | undefined;
    address?: StringNullableWithAggregatesFilter | undefined;
}
