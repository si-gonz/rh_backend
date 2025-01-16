import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh_g1',
      entities:[Colaborador],
      synchronize: true,
      logging: true,

    }),
    ColaboradorModule    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
