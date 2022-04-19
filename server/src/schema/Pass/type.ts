import { Field, ObjectType, ID } from "type-graphql";
import { Base } from "../Base/type";

@ObjectType()
export class Pass extends Base {
  @Field()
  lastLoginDate: Date;
}
