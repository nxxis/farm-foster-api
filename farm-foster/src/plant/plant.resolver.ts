import { Resolver } from '@nestjs/graphql';
import { PlantService } from './plant.service';

@Resolver()
export class PlantResolver {
  constructor(private readonly plantService: PlantService) {}
}
