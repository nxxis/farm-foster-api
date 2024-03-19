import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalResolver } from './animal.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from './schema/animal.schema';
import { AnimalRepository } from './animal.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Animal', schema: AnimalSchema }]),
  ],
  providers: [AnimalResolver, AnimalService, AnimalRepository],
})
export class AnimalModule {}
