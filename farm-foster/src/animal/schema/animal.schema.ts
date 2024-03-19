import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Animal {
  @Prop({ required: true })
  name: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);