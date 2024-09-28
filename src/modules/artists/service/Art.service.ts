import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Art } from 'src/database/entities/artsist.entity';
import { Repository } from 'typeorm';
import { CreateArtsistsDto } from '../dto/create-artsist.dto';
import { Body } from '@nestjs/common';
import { UpdateArtsistDto } from '../dto/update-artsist.dto';
@Injectable()
export class ArtService {
  constructor(
    @InjectRepository(Art)
    private artsRepository: Repository<Art>,
  ) {}

  findAll(){
    return this.artsRepository.find();
  }
   
  findOne(id:number){
    return this.artsRepository.findOneBy({
      id,
    })
  }

 async update(id:number, body:UpdateArtsistDto){
    await this.artsRepository.save({
      id,
      ...body
    });
    const user = this.artsRepository.findOneBy({
      id,
    })
    return user
  }
  async create(createArts:CreateArtsistsDto){
    const art = this.artsRepository.create(createArts);
    return await this.artsRepository.save(art)
  }

  async delete(id:number){
    await this.artsRepository.delete({id});
    return `Delete user with ${id} successfully`;
  }
}
