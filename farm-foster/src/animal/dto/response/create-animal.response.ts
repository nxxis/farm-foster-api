import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CreateAnimalResponse {
  @Field()
  name: string;
}
