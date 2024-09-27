import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Art } from 'src/database/entities/artsist.entity';
import { Repository } from 'typeorm';
import { CreateArtsistsDto } from '../dto/create-artsist.dto';
@Injectable()
export class ArtService {
  constructor(
    @InjectRepository(Art)
    private artsRepository: Repository<Art>,
  ) {}

  findAll(){
    return this.artsRepository.find();
  }

  async create(createArts:CreateArtsistsDto){
    const art = this.artsRepository.create(createArts);
    return await this.artsRepository.save(art)
  }
}
