import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'proyecto' })
export class Proyecto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    objetivo: string

    @Column({ type: "int4" })
    presupuestoDias: number

    @Column({ type: "int4" })
    presupuestoDinero: number
}