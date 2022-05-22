import { PassCreateManyClassroomInputEnvelope } from "../inputs/PassCreateManyClassroomInputEnvelope";
import { PassCreateOrConnectWithoutClassroomInput } from "../inputs/PassCreateOrConnectWithoutClassroomInput";
import { PassCreateWithoutClassroomInput } from "../inputs/PassCreateWithoutClassroomInput";
import { PassWhereUniqueInput } from "../inputs/PassWhereUniqueInput";
export declare class PassCreateNestedManyWithoutClassroomInput {
    create?: PassCreateWithoutClassroomInput[] | undefined;
    connectOrCreate?: PassCreateOrConnectWithoutClassroomInput[] | undefined;
    createMany?: PassCreateManyClassroomInputEnvelope | undefined;
    connect?: PassWhereUniqueInput[] | undefined;
}
