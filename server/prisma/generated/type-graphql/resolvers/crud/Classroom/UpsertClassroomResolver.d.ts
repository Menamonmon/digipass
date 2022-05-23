import { GraphQLResolveInfo } from "graphql";
import { UpsertClassroomArgs } from "./args/UpsertClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class UpsertClassroomResolver {
    upsertClassroom(ctx: any, info: GraphQLResolveInfo, args: UpsertClassroomArgs): Promise<Classroom>;
}
