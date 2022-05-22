import { GraphQLResolveInfo } from "graphql";
import { CreateClassroomArgs } from "./args/CreateClassroomArgs";
import { Classroom } from "../../../models/Classroom";
export declare class CreateClassroomResolver {
    createClassroom(ctx: any, info: GraphQLResolveInfo, args: CreateClassroomArgs): Promise<Classroom>;
}
