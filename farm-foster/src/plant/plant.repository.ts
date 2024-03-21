import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plant } from './schema/plant.schema';
import mongoose from 'mongoose';

@Injectable()
export class PlantRepository {
  constructor(
    @InjectModel(Plant.name) private plantModel: mongoose.Model<Plant>,
  ) {}

  async getAllPlantRepository() {
    try {
      return this.plantModel.find({});
    } catch (error) {
      throw new Error(error);
    }
  }

  async createPlantRepository(data) {
    try {
      const user = new this.plantModel(data);
      if (!user) {
        throw new Error('Error while creating the user');
      }
      return await user.save();
    } catch (error) {
      return error;
    }
  }
}
