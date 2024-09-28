import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ArtService } from '../service/Art.service';
import { CreateArtsistsDto } from '../dto/create-artsist.dto';
import { UpdateArtsistDto } from '../dto/update-artsist.dto';
@Controller('arts')
export class ArtsController {
  constructor(private artsService: ArtService) {}

  @Get()
  findAll() {
    return this.artsService.findAll();
  }
  @Patch(':id')
  async update(
    @Param('id',ParseIntPipe) id:number,
    @Body() body:UpdateArtsistDto,
  ){
    return await this.artsService.update(id,body)
  }

  @Post('create')
  async create(@Body() body: CreateArtsistsDto) {
    return await this.artsService.create(body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.artsService.delete(id);
}
}
