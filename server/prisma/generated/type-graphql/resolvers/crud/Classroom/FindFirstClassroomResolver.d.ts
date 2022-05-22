import { GraphQLResolveInfo } from "graphql";
import { FindFirstClassroomArgs } from "./args/FindFirstClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class FindFirstClassroomResolver {
    findFirstClassroom(ctx: any, info: GraphQLResolveInfo, args: FindFirstClassroomArgs): Promise<Classroom | null>;
}
