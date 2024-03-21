import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PlantService } from './plant.service';
import { GetAllPlantResponse } from './dto/response/get-all-plant.response';
import { CreatePlantResponse } from './dto/response/create-plant.response';
import { CreatePlantInput } from './dto/input/create-plant.input';

@Resolver()
export class PlantResolver {
  constructor(private readonly plantService: PlantService) {}

  @Query(() => GetAllPlantResponse)
  async GetAllPlants() {
    const plants = await this.plantService.getAllPlantServie();
    return { plants };
  }

  @Mutation(() => CreatePlantResponse)
  async createPlant(@Args('CreatePlantnput') body: CreatePlantInput) {
    return await this.plantService.createPlantService(body);
  }
}
