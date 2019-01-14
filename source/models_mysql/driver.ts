import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class Driver extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: String

    @Column({ type: "float", precision: 11, scale: 8 })
    longitude: Number

    @Column({ type: "float", precision: 10, scale: 8 })
    latitude: Number
}