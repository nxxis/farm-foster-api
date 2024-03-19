import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAnimalInput {
  @Field()
  name: string;
}
