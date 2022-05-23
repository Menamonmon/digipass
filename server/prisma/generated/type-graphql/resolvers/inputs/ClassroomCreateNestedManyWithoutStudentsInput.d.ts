import { ClassroomCreateOrConnectWithoutStudentsInput } from "../inputs/ClassroomCreateOrConnectWithoutStudentsInput";
import { ClassroomCreateWithoutStudentsInput } from "../inputs/ClassroomCreateWithoutStudentsInput";
import { ClassroomWhereUniqueInput } from "../inputs/ClassroomWhereUniqueInput";
export declare class ClassroomCreateNestedManyWithoutStudentsInput {
    create?: ClassroomCreateWithoutStudentsInput[] | undefined;
    connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput[] | undefined;
    connect?: ClassroomWhereUniqueInput[] | undefined;
}
