import {Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ShooterEntity} from "./shooter.entity";

@Entity({ name: 'exercise_result' })
export class ExerciseResultEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'timestamp', nullable: false })
    timestamp: number;

    @Column({ name: 'createdAt', type: 'date' })
    createdAt: Date;

    @Column()
    shooterId: number;


    @ManyToOne(() => ShooterEntity, (shooter) => shooter.exerciseResults)
    shooter: ShooterEntity;
}