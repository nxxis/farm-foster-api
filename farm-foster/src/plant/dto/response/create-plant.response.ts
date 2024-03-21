import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CreatePlantResponse {
  @Field()
  name: string;
}