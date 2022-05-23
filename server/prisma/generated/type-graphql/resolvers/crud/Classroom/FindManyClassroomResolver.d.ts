import { GraphQLResolveInfo } from "graphql";
import { FindManyClassroomArgs } from "./args/FindManyClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class FindManyClassroomResolver {
    classrooms(ctx: any, info: GraphQLResolveInfo, args: FindManyClassroomArgs): Promise<Classroom[]>;
}
