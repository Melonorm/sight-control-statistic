import {Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, RelationId} from "typeorm";
import {FlightEntity} from "./flight.entity";

@Entity({ name: 'shot' })
export class ShotEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'distance', type: 'decimal', nullable: false })
    distance: number;

    @Column({ name: 'height', nullable: false })
    height: number;

    @Column({ name: 'accuracy', type: 'decimal', nullable: false })
    accuracy: number;

    @Column({ name: 'velocity', nullable: false })
    velocity: number;

    @Column({ name: 'elevation', type: 'decimal', nullable: false })
    elevation: number;

    @Column({ name: 'azimuth_speed', type: 'decimal', nullable: false })
    azimuthSpeed: number;

    @Column({ name: 'elevation_speed', type: 'decimal', nullable: false })
    elevationSpeed: number;

    @Column({ name: 'calc_horiz_lead', type: 'decimal', nullable: false })
    calcHorizLead: number;

    @Column({ name: 'calc_vert_lead', type: 'decimal', nullable: false })
    calcVertLead: number;

    @Column({ name: 'fire_horiz_lead', type: 'decimal', nullable: false })
    fireHorizLead: number;

    @Column({ name: 'fire_vert_lead', type: 'decimal', nullable: false })
    fireVertLead: number;

    @Column({ name: 'shoot_time', type: 'timestamp', nullable: false })
    shotTime: Date;


    @Column({type: 'bigint' })
    @RelationId((shot: ShotEntity) => shot.flight)
    flightId: number;


    @ManyToOne(() => FlightEntity, (flight) => flight.shots,
        { onDelete: "CASCADE", onUpdate: "CASCADE"})
    flight: FlightEntity;
}