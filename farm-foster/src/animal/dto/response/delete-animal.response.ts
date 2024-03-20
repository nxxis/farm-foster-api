import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class DeleteAnimalResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}
