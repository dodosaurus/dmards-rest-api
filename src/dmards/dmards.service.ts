import { Injectable } from '@nestjs/common';
import { CreateDmardDto } from './dto/create-dmard.dto';
import { UpdateDmardDto } from './dto/update-dmard.dto';

@Injectable()
export class DmardsService {
  create(createDmardDto: CreateDmardDto) {
    return 'This action adds a new dmard';
  }

  findAll() {
    return `This action returns all dmards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dmard`;
  }

  update(id: number, updateDmardDto: UpdateDmardDto) {
    return `This action updates a #${id} dmard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dmard`;
  }
}
