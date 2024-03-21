import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantResolver } from './plant.resolver';
import { PlantRepository } from './plant.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantSchema } from './schema/plant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Plant', schema: PlantSchema }]),
  ],
  providers: [PlantResolver, PlantService, PlantRepository],
})
export class PlantModule {}
