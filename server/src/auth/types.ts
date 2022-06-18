import { Field, ObjectType } from "type-graphql";
import { Student, Teacher } from "../../prisma/generated/type-graphql";
import { GraphQLContext } from "../types";
@ObjectType()
export class TeacherRegisterResponse extends Teacher {
  @Field()
  userType?: "new_teacher" | "old_teacher";

  @Field()
  jwt?: string;
}

@ObjectType()
export class StudentRegisterResponse extends Student {
  @Field()
  userType?: "new_student" | "old_student";

  @Field()
  jwt?: string;
}

@ObjectType()
export class CurrentUser {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  pictureUrl: string;
}

export interface CurrentUserJwtInfo {
  id: string;
  email: string;
  userType: "student" | "teacher";
}
export interface AuthenticatedGraphQLContext extends GraphQLContext {
  user: CurrentUserJwtInfo | null;
}
