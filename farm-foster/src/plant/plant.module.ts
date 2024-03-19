import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantResolver } from './plant.resolver';

@Module({
  providers: [PlantResolver, PlantService],
})
export class PlantModule {}
