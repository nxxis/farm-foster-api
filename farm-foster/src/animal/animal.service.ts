import { Injectable } from '@nestjs/common';
import { AnimalRepository } from './animal.repository';

@Injectable()
export class AnimalService {
  constructor(private animalRepository: AnimalRepository) {}

  async getAllAnimalServie() {
    return await this.animalRepository.getAllAnimalRepository();
  }

  async createAnimalService(data) {
    return await this.animalRepository.createAnimalRepository(data);
  }
}
