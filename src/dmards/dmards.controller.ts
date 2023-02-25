import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DmardsService } from './dmards.service';
import { CreateDmardDto } from './dto/create-dmard.dto';
import { UpdateDmardDto } from './dto/update-dmard.dto';

@Controller('dmards')
export class DmardsController {
  constructor(private readonly dmardsService: DmardsService) {}

  @Post()
  create(@Body() createDmardDto: CreateDmardDto) {
    return this.dmardsService.create(createDmardDto);
  }

  @Get()
  findAll() {
    return this.dmardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dmardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDmardDto: UpdateDmardDto) {
    return this.dmardsService.update(+id, updateDmardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dmardsService.remove(+id);
  }
}
