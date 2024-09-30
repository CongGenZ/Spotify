import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ArtService } from '../service/Art.service';
import { CreateArtsistsDto } from '../dto/create-artsist.dto';
import { UpdateArtsistDto } from '../dto/update-artsist.dto';
import { Roles } from 'src/modules/users/decorators/roles.decoration';
import { RolesGuard } from 'src/guards/roles.guards';
@Controller('arts')
export class ArtsController {
  constructor(private artsService: ArtService) {}

  @Get()
  findAll() {
    return this.artsService.findAll();
  }
  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(['ART'])
  async update(
    @Param('id',ParseIntPipe) id:number,
    @Body() body:UpdateArtsistDto,
  ){
    return await this.artsService.update(id,body)
  }
  
  @Post('create')
  @UseGuards(RolesGuard)
  @Roles(['ART'])
  async create(@Body() body: CreateArtsistsDto) {
    return await this.artsService.create(body);
  }
  @UseGuards(RolesGuard)
  @Roles(['ADMIN ART'])
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.artsService.delete(id);
}
}
