import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AnimalModule } from './animal/animal.module';
import { PlantModule } from './plant/plant.module';
import { ConfigProvider } from './provider/config.provider';
import { DatabaseProvider } from './provider/database.provider';

@Module({
  imports: [
    ConfigProvider,
    DatabaseProvider,

    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      inrospection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AnimalModule,
    PlantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
