import { IPAddressAvgAggregate } from "../outputs/IPAddressAvgAggregate";
import { IPAddressCountAggregate } from "../outputs/IPAddressCountAggregate";
import { IPAddressMaxAggregate } from "../outputs/IPAddressMaxAggregate";
import { IPAddressMinAggregate } from "../outputs/IPAddressMinAggregate";
import { IPAddressSumAggregate } from "../outputs/IPAddressSumAggregate";
export declare class IPAddressGroupBy {
    id: number;
    ownerId: number | null;
    createdAt: Date | null;
    address: string | null;
    _count: IPAddressCountAggregate | null;
    _avg: IPAddressAvgAggregate | null;
    _sum: IPAddressSumAggregate | null;
    _min: IPAddressMinAggregate | null;
    _max: IPAddressMaxAggregate | null;
}
