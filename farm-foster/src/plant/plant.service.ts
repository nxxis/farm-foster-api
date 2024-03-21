import { Injectable } from '@nestjs/common';
import { PlantRepository } from './plant.repository';

@Injectable()
export class PlantService {
  constructor(private animalRepository: PlantRepository) {}

  async getAllPlantServie() {
    return await this.animalRepository.getAllPlantRepository();
  }

  async createPlantService(data) {
    return await this.animalRepository.createPlantRepository(data);
  }
}
