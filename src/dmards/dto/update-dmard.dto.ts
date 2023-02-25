import { PartialType } from '@nestjs/mapped-types';
import { CreateDmardDto } from './create-dmard.dto';

export class UpdateDmardDto extends PartialType(CreateDmardDto) {}
