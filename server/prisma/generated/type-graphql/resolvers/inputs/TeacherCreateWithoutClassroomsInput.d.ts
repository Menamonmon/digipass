import { PassCreateNestedManyWithoutIssuerInput } from "../inputs/PassCreateNestedManyWithoutIssuerInput";
export declare class TeacherCreateWithoutClassroomsInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date | undefined;
    lastLogin?: Date | undefined;
    issuedPasses?: PassCreateNestedManyWithoutIssuerInput | undefined;
}
