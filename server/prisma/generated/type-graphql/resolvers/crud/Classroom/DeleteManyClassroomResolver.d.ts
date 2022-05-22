import { GraphQLResolveInfo } from "graphql";
import { DeleteManyClassroomArgs } from "./args/DeleteManyClassroomArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyClassroomResolver {
    deleteManyClassroom(ctx: any, info: GraphQLResolveInfo, args: DeleteManyClassroomArgs): Promise<AffectedRowsOutput>;
}
