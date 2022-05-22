import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StudentRelationFilter } from "../inputs/StudentRelationFilter";
export declare class IPAddressWhereInput {
    AND?: IPAddressWhereInput[] | undefined;
    OR?: IPAddressWhereInput[] | undefined;
    NOT?: IPAddressWhereInput[] | undefined;
    owner?: StudentRelationFilter | undefined;
    ownerId?: IntFilter | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    address?: StringFilter | undefined;
}
