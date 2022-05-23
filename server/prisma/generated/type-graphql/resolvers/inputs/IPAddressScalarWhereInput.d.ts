import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class IPAddressScalarWhereInput {
    AND?: IPAddressScalarWhereInput[] | undefined;
    OR?: IPAddressScalarWhereInput[] | undefined;
    NOT?: IPAddressScalarWhereInput[] | undefined;
    ownerId?: IntFilter | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    address?: StringFilter | undefined;
}
