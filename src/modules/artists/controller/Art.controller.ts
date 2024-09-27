import { Body, Controller, Get, Post } from "@nestjs/common";
import { ArtService } from "../service/Art.service";
import { CreateArtsistsDto } from "../dto/create-artsist.dto";
@Controller('arts')
export class ArtsController{
    constructor (
        private artsService:ArtService
    ){}

    @Get()
    findAll(){
        return this.artsService.findAll();
    }

    @Post('create')
  async create(@Body() body: CreateArtsistsDto) {
    return await this.artsService.create(body);
  }
}