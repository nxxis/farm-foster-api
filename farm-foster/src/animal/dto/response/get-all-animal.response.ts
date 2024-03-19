import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Animal {
  @Field()
  name: string;
}

@ObjectType()
export class GetAllAnimalResponse {
  @Field(() => [Animal])
  animals: Animal[];
}
