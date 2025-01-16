import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Colaborador } from '../entities/colaborador.entity';
import { ColaboradorService } from '../services/colaborador.service';

@Controller('/colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Colaborador[]> {
    return this.colaboradorService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
    return this.colaboradorService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Colaborador[]> {
    return this.colaboradorService.findByNome(nome);
  }

  @Get('/email/:email')
  @HttpCode(HttpStatus.OK)
  findByEmail(@Param('email') email: string): Promise<Colaborador> {
    return this.colaboradorService.findByEmail(email);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorService.create(colaborador);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorService.update(colaborador);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.colaboradorService.delete(id);
  }
}
