import { GraphQLResolveInfo } from "graphql";
import { UpdateManyClassroomArgs } from "./args/UpdateManyClassroomArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyClassroomResolver {
    updateManyClassroom(ctx: any, info: GraphQLResolveInfo, args: UpdateManyClassroomArgs): Promise<AffectedRowsOutput>;
}
