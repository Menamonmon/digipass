import { Field, ObjectType } from "type-graphql";
import { Student } from "../../prisma/generated/type-graphql";

@ObjectType()
export class RegisterResponse extends Student {
  @Field()
  userType?: "new_student" | "old_student";

  @Field()
  jwt?: string;
}
