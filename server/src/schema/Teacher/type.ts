import { Field, ObjectType, ID } from "type-graphql";
import { Class } from "../Class/type";
import { User } from "../User/type";

@ObjectType()
export class Teacher extends User {
  @Field()
  classes: [Class];
}
