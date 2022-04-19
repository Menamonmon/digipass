import { Field, ObjectType, ID } from "type-graphql";
import { Base } from "../Base/type";

@ObjectType()
export class User extends Base {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  lastLoginDate: Date;
}
