import {Column, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ShooterEntity} from "./shooter.entity";
import {FlightEntity} from "./flight.entity";

@Entity({ name: 'exercise_result' })
export class ExerciseResultEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'timestamp', type: 'bigint', nullable: false })
    timestamp: number;

    @Column({ name: 'createdAt', type: 'timestamp' })
    createdAt: Date;

    @Column()
    shooterId: number;


    @ManyToOne(() => ShooterEntity, (shooter) => shooter.exerciseResults,
        { onDelete: "CASCADE", onUpdate: "CASCADE" })
    shooter: ShooterEntity;

    @OneToMany(() => FlightEntity, (flight) => flight.exerciseResult)
    flights: FlightEntity[];
}