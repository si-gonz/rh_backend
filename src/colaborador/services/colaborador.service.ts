import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Colaborador } from '../entities/colaborador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return this.colaboradorRepository.find();
  }

  async findById(id: number): Promise<Colaborador> {
    const colaborador = await this.colaboradorRepository.findOne({
      where: {
        id,
      },
    });
    if (!colaborador)
      throw new HttpException(
        'Colaborador não encontrado',
        HttpStatus.NOT_FOUND,
      );

    return colaborador;
  }

  async findByNome(nome: string): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async findByEmail(email: string): Promise<Colaborador> {
    return await this.colaboradorRepository.findOne({
      where: {
        email: ILike(`%${email}%`),
      },
    });
  }

  async create(colaborador: Colaborador): Promise<Colaborador> {
    return await this.colaboradorRepository.save(colaborador);
  }

  async update(colaborador: Colaborador): Promise<Colaborador> {
    await this.findById(colaborador.id);
    return await this.colaboradorRepository.save(colaborador);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscaColaborador = await this.findById(id);

    if (!buscaColaborador)
      throw new HttpException(
        'Colaborador não encontrado',
        HttpStatus.NOT_FOUND,
      );

    return await this.colaboradorRepository.delete(id);
  }
}
