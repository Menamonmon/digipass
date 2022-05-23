import { GraphQLResolveInfo } from "graphql";
import { CreateManyStudentArgs } from "./args/CreateManyStudentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyStudentResolver {
    createManyStudent(ctx: any, info: GraphQLResolveInfo, args: CreateManyStudentArgs): Promise<AffectedRowsOutput>;
}
