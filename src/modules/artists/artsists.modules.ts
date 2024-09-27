import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtsController } from './controller/Art.controller';
import { ArtService } from './service/Art.service';
import { Art } from 'src/database/entities/artsist.entity';
// import { Album } from 'src/database/entities/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Art])],
  controllers: [ArtsController],
  providers: [ArtService],
})
export class ArtistsModule {}
