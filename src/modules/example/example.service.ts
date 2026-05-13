import { Injectable, Logger } from '@nestjs/common';
import type { CreateExampleDto } from './dto/create-example.dto';
import type { UpdateExampleDto } from './dto/update-example.dto';

@Injectable()
export class ExampleService {
  private readonly logger = new Logger(ExampleService.name);
  create(_createExampleDto: CreateExampleDto) {
    this.logger.debug('create');
    return 'This action adds a new example';
  }

  findAll() {
    this.logger.debug('findAll');
    return `This action returns all example`;
  }

  findOne(id: number) {
    this.logger.debug('findOne');
    return `This action returns a #${id} example`;
  }

  update(id: number, _updateExampleDto: UpdateExampleDto) {
    this.logger.debug('update');
    return `This action updates a #${id} example`;
  }

  remove(id: number) {
    this.logger.debug('remove');
    return `This action removes a #${id} example`;
  }
}
