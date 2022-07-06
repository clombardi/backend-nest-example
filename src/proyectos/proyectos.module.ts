import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProyectosController } from "./proyectos.controller";
import { Proyecto } from "./proyectos.entity";
import { ProyectosService } from "./proyectos.service";

@Module({
    imports: [TypeOrmModule.forFeature([Proyecto])],
    controllers: [ProyectosController],
    providers: [ProyectosService],   // ver qué pasa si no se pone el provider
})
export class ProyectosModule { }
