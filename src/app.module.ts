import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyectos/proyectos.entity';
import { ProyectosModule } from './proyectos/proyectos.module';
import { Tarea } from './tareas/tareas.entity';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // parámetros de conexión a la BD
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "unahur_desapp",
      "password": "toto",
      "database": "taskmanagement_nest",
      // seteos generales de TypeORM
      "synchronize": true,   // para que cada cambio en los entities se refleje en la estructura de la BD
      "logging": true,
      // entidades que conforman el modelo persistente
      "entities": [Proyecto, Tarea],
      // recomendada para usar con NestJS por lo menos en desarrollo
      "keepConnectionAlive": true,    // para que funcione el hot reload 
    }),
    ProyectosModule,
    TareasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
