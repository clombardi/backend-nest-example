import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tarea } from "./tareas.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tarea])],
    controllers: [],
    providers: [],
})
export class TareasModule { }
