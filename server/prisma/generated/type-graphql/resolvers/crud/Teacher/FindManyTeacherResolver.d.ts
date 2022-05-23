import { GraphQLResolveInfo } from "graphql";
import { FindManyTeacherArgs } from "./args/FindManyTeacherArgs";
import { Teacher } from "../../../models/Teacher";
export declare class FindManyTeacherResolver {
    teachers(ctx: any, info: GraphQLResolveInfo, args: FindManyTeacherArgs): Promise<Teacher[]>;
}
