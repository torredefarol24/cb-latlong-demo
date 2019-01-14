import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Driver {

    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column({ type: "float", precision: 10, scale: 8 })
    latitude: number

    @Column({ type: "float", precision: 11, scale: 8 })
    longitude: number
}