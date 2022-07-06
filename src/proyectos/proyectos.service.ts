import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MoreThanOrEqual, Repository } from "typeorm";
import { Proyecto } from "./proyectos.entity";

@Injectable()
export class ProyectosService {
    constructor(
        @InjectRepository(Proyecto)
        private readonly proyectoRepository: Repository<Proyecto>
    ) {}

    async getAllProyectosConFiltro(queryParams) {
        const filters: { nombre?: string, presupuestoDias?: any } = {};
        if (queryParams.nombre) {
            filters.nombre = queryParams.nombre;
        } 
        if (queryParams.diasMinimo) {
            filters.presupuestoDias = MoreThanOrEqual(Number(queryParams.diasMinimo));
        }
        console.log(filters);
        return this.proyectoRepository.find({ where: filters});
    }

    async getAllProyectos() {
        return this.proyectoRepository.find();
    }

    async getProyectoById(id: number) {
        return this.proyectoRepository.findOne({ where: { id }});
    }

    async addProyecto(data) {
        const nuevoProyecto = new Proyecto();
        nuevoProyecto.nombre = data.nombre;
        nuevoProyecto.objetivo = data.objetivo;
        nuevoProyecto.presupuestoDias = data.presupuestoDias;
        nuevoProyecto.presupuestoDinero = data.presupuestoDinero;
        return this.proyectoRepository.save(nuevoProyecto);
    }
}
