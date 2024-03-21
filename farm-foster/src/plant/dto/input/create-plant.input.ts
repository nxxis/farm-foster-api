import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePlantInput {
  @Field()
  name: string;
}
