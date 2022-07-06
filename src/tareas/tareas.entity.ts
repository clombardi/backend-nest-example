import { Proyecto } from "src/proyectos/proyectos.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tarea' })
export class Tarea {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @ManyToOne(() => Proyecto)
    proyecto: Proyecto

    @Column({ type: "int4" })
    diasTrabajados: number

    @Column({ type: "int4" })
    dineroGastado: number

    @Column()
    empezada: boolean
    
    @Column()
    terminada: boolean
}
