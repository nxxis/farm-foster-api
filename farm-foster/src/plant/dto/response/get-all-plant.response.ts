import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Plant {
  @Field()
  name: string;

  @Field()
  id: string;
}

@ObjectType()
export class GetAllPlantResponse {
  @Field(() => [Plant])
  plants: Plant[];
}
