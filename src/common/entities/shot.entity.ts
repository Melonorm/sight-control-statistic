import {Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FlightEntity} from "./flight.entity";

@Entity({ name: 'shot' })
export class ShotEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'distance', nullable: false })
    distance: number;

    @Column({ name: 'height', nullable: false })
    height: number;

    @Column({ name: 'accuracy', nullable: false })
    accuracy: number;


    @Column()
    flightId: number;


    @ManyToOne(() => FlightEntity, (flight) => flight.shots,
        { onDelete: "CASCADE", onUpdate: "CASCADE"})
    flight: FlightEntity;
}