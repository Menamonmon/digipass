import { PassCreateManyStudentInputEnvelope } from "../inputs/PassCreateManyStudentInputEnvelope";
import { PassCreateOrConnectWithoutStudentInput } from "../inputs/PassCreateOrConnectWithoutStudentInput";
import { PassCreateWithoutStudentInput } from "../inputs/PassCreateWithoutStudentInput";
import { PassWhereUniqueInput } from "../inputs/PassWhereUniqueInput";
export declare class PassCreateNestedManyWithoutStudentInput {
    create?: PassCreateWithoutStudentInput[] | undefined;
    connectOrCreate?: PassCreateOrConnectWithoutStudentInput[] | undefined;
    createMany?: PassCreateManyStudentInputEnvelope | undefined;
    connect?: PassWhereUniqueInput[] | undefined;
}
