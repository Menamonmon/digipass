import { GraphQLResolveInfo } from "graphql";
import { DeleteClassroomArgs } from "./args/DeleteClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class DeleteClassroomResolver {
    deleteClassroom(ctx: any, info: GraphQLResolveInfo, args: DeleteClassroomArgs): Promise<Classroom | null>;
}
