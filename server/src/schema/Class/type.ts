import { Field, ObjectType, ID } from "type-graphql";
import { Teacher } from "../Teacher/type";
import { Base } from "../Base/type";
import { Pass } from "../Pass/type";

@ObjectType()
export class Class extends Base {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  classCode: string;

  @Field()
  passes: [Pass];

  @Field()
  teachers: [Teacher];
}
