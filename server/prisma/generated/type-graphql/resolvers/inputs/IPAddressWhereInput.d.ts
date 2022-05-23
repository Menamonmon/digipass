import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";
export declare class IPAddressWhereInput {
    AND?: IPAddressWhereInput[] | undefined;
    OR?: IPAddressWhereInput[] | undefined;
    NOT?: IPAddressWhereInput[] | undefined;
    id?: IntFilter | undefined;
    owner?: StudentRelationFilter | undefined;
    ownerId?: IntNullableFilter | undefined;
    createdAt?: DateTimeNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
}
