import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schema/animal.schema';
import mongoose from 'mongoose';

@Injectable()
export class AnimalRepository {
  constructor(
    @InjectModel(Animal.name) private animalModel: mongoose.Model<Animal>,
  ) {}

  async getAllAnimalRepository() {
    try {
      return this.animalModel.find({});
    } catch (error) {
      throw new Error(error);
    }
  }

  async createAnimalRepository(data) {
    try {
      const user = new this.animalModel(data);
      if (!user) {
        throw new Error('Error while creating the user');
      }
      return await user.save();
    } catch (error) {
      return error;
    }
  }
  async deleteAnimalByIdRepository(id) {
    try {
      const isIdValid = mongoose.Types.ObjectId.isValid(id);
      if (!isIdValid) {
        throw new BadRequestException('Invalid id');
      }

      const isAnimalDeleted = await this.animalModel.findByIdAndDelete({
        _id: id,
      });
      if (!isAnimalDeleted) {
        return { success: false, message: 'Animal not found' };
      }

      return { success: true, message: 'Animal deleted successfully' };
    } catch (error) {
      throw new Error(error);
    }
  }
}
