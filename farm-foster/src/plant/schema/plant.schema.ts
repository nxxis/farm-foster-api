import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Plant {
  @Prop({ required: true })
  name: string;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);
