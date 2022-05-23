import { IPAddress } from "../../../models/IPAddress";
import { Student } from "../../../models/Student";
export declare class IPAddressRelationsResolver {
    owner(iPAddress: IPAddress, ctx: any): Promise<Student | null>;
}
