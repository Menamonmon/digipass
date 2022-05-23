import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class IPAddressScalarWhereInput {
    AND?: IPAddressScalarWhereInput[] | undefined;
    OR?: IPAddressScalarWhereInput[] | undefined;
    NOT?: IPAddressScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    ownerId?: IntNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
}
