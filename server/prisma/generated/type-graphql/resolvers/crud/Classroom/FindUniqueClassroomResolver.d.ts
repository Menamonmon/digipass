import { GraphQLResolveInfo } from "graphql";
import { FindUniqueClassroomArgs } from "./args/FindUniqueClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class FindUniqueClassroomResolver {
    classroom(ctx: any, info: GraphQLResolveInfo, args: FindUniqueClassroomArgs): Promise<Classroom | null>;
}
