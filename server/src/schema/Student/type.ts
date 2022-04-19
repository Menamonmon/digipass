import { Max, Min } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import { Class } from "../Class/type";
import { IPAddress } from "../IPAddress/type";
import { User } from "../User/type";

@ObjectType()
export class Student extends User {
  @Field()
  studentID: string;

  @Field()
  associatedIPAddresses: [IPAddress]

  @Field()
  @Min(0)
  passesUsed: number;

  @Field()
  classes: [Class]
}
