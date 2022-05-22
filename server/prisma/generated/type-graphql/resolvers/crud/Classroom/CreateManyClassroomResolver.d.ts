import { GraphQLResolveInfo } from "graphql";
import { CreateManyClassroomArgs } from "./args/CreateManyClassroomArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyClassroomResolver {
    createManyClassroom(ctx: any, info: GraphQLResolveInfo, args: CreateManyClassroomArgs): Promise<AffectedRowsOutput>;
}
