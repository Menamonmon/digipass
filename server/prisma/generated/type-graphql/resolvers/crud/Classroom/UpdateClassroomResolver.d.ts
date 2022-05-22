import { GraphQLResolveInfo } from "graphql";
import { UpdateClassroomArgs } from "./args/UpdateClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class UpdateClassroomResolver {
    updateClassroom(ctx: any, info: GraphQLResolveInfo, args: UpdateClassroomArgs): Promise<Classroom | null>;
}
