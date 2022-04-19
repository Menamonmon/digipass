import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Base {
  @Field((type) => ID)
  id: string;

  @Field()
  createdAt: Date;
}
