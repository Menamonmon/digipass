import { Length } from "class-validator";
import { Field, ObjectType, ID } from "type-graphql";
import { Student } from "../Student/type";
import { Base } from "../Base/type";

@ObjectType()
export class IPAddress extends Base {
  @Field()
  @Length(7, 16)
  address: string;

  @Field()
  associatedStudent: Student;
}
