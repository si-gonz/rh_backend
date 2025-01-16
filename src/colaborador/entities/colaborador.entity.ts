import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsPositive } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "tb_colaboradores" })
export class Colaborador {
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    nome: string
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    email: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    cargo: string
    
    @IsPositive()
    @Column({type: 'decimal', nullable: false})
    salario: number

    @Column({ type: 'date', nullable: false})
    dataContratacao: Date;

}


