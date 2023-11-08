import {Column, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from "typeorm";
import {ShooterEntity} from "./shooter.entity";
import {FlightEntity} from "./flight.entity";

@Entity({ name: 'exercise_result' })
export class ExerciseResultEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ type: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'timestamp', type: 'bigint', nullable: false })
    timestamp: number;

    @Column({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @Column({ name: 'difficulty_level', nullable: false })
    difficultyLevel: number;

    @Column({ name: 'hits_count', nullable: false })
    hitsCount: number;

    @Column({ name: 'targets_count', nullable: false })
    targetsCount: number;

    @Column({ name: 'shells_used', nullable: false })
    shellsUsed: number;

    @Column({ name: 'info_level', nullable: false })
    infoLevel: string;   // на стороне Android - ENUM

    @Column({ name: 'points', type: 'decimal', nullable: false })
    points: number;


    @Column({ type: "bigint" })
    @RelationId((exerciseResult: ExerciseResultEntity) => exerciseResult.shooter)
    shooterId: number;


    @ManyToOne(() => ShooterEntity, (shooter) => shooter.exerciseResults,
        { onDelete: "CASCADE", onUpdate: "CASCADE" })
    shooter: ShooterEntity;

    @OneToMany(() => FlightEntity, (flight) => flight.exerciseResult)
    flights: FlightEntity[];
}