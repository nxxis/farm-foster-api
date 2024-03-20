import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { GetAllAnimalResponse } from './dto/response/get-all-animal.response';
import { CreateAnimalInput } from './dto/input/create-animal.input';
import { CreateAnimalResponse } from './dto/response/create-animal.response';
import { DeleteAnimalResponse } from './dto/response/delete-animal.response';

@Resolver()
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Query(() => GetAllAnimalResponse)
  async GetAllAnimals() {
    const animals = await this.animalService.getAllAnimalServie();
    return { animals };
  }

  @Mutation(() => CreateAnimalResponse)
  async createAnimal(@Args('CreateAnimalnput') body: CreateAnimalInput) {
    return await this.animalService.createAnimalService(body);
  }

  @Mutation(() => DeleteAnimalResponse)
  async deleteAnimalById(@Args('id') id: string) {
    return await this.animalService.deleteAnimalByIdService(id);
  }
}
