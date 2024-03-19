import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Animal {
  @Field()
  name: string;

  @Field()
  id: string;
}

@ObjectType()
export class GetAllAnimalResponse {
  @Field(() => [Animal])
  animals: Animal[];
}
