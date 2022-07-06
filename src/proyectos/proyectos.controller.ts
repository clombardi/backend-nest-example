import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ProyectosService } from "./proyectos.service";

@Controller('/api/proyectos')
export class ProyectosController {
    constructor(private proyectosService: ProyectosService) { }

    @Get()
    async getAllProyectos() {
        const proyectos = await this.proyectosService.getAllProyectos();
        return { data: proyectos };
    }

    @Get("/conFiltro")
    async getAllProyectosConFiltro(@Query() queryParams) {
        const proyectos = await this.proyectosService.getAllProyectosConFiltro(queryParams);
        return { data: proyectos };
    }

    @Get('/:cuchufleta') 
    async getProyectoById(@Param("cuchufleta") id: string) {
        const proyecto = await this.proyectosService.getProyectoById(Number(id));
        return { data: proyecto };
    }

    @Post()
    async addProyecto(@Body() data) {
        const response = await this.proyectosService.addProyecto(data);
        return { data: response };
    }

    @Get('/memory')
    getAllProyectos_memory() {
        return {
            data: [{
                "id": 1,
                "nombre": "sugerencias",
                "objetivo": "enviar sugerencias personalizadas",
                "presupuestoDias": 340,
                "presupuestoDinero": 230000,
                "createdAt": "2022-06-16T21:49:15.210Z",
                "updatedAt": "2022-06-16T21:49:15.210Z"
            },
            {
                "id": 2,
                "nombre": "legajos_docentes",
                "objetivo": "informatiza la gestión de la información sobre docentes",
                "presupuestoDias": 150,
                "presupuestoDinero": 180000,
                "createdAt": "2022-06-16T22:57:59.837Z",
                "updatedAt": "2022-06-16T22:57:59.837Z"
            }]
        }
    }
}
