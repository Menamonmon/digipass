import { PassCreateNestedManyWithoutIssuerInput } from "../inputs/PassCreateNestedManyWithoutIssuerInput";
export declare class TeacherCreateWithoutClassroomsInput {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    password?: string | undefined;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    issuedPasses?: PassCreateNestedManyWithoutIssuerInput | undefined;
}
