import {Column, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from "typeorm";
import {ExerciseResultEntity} from "./exerciseResult.entity";
import {ShotEntity} from "./shot.entity";

@Entity({ name: 'flight' })
export class FlightEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ name: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'speed', nullable: false })
    speed: number;

    @Column({ name: 'height', nullable: false })
    height: number;

    @Column({ name: 'no', nullable: false })
    no: number;

    @Column({ name: 'start_x', type: 'decimal', nullable: false })
    startX: number; // Ось Х проходит перпендикулярно зафиксированному стволу АЗГ слева направо

    @Column({ name: 'start_y', type: 'decimal', nullable: false })
    startY: number; // Ось Y проходит по зафиксированному стволу от АЗГ, которая находится в начале координат

    @Column({ name: 'finish_x', type: 'decimal', nullable: false })
    finishX: number;

    @Column({ name: 'finish_y', type: 'decimal', nullable: false })
    finishY: number;

    @Column({ name: 'duration_sec', type: 'decimal', nullable: false })
    durationSec: number; // Длительность полета в секундах

    @Column({ name: 'length_plan', type: 'decimal', nullable: false })
    lengthPlan: number; // Плановая длина полета в метрах

    @Column({ name: 'heading', type: 'decimal', nullable: false })
    heading: number; // Курс в градусах


    @Column({ type: "bigint" })
    @RelationId((flight: FlightEntity) => flight.exerciseResult)
    exerciseResultId: number;


    @ManyToOne(() => ExerciseResultEntity, (exerciseResult) => exerciseResult.flights,
        { onDelete: "CASCADE", onUpdate: "CASCADE" })
    exerciseResult: ExerciseResultEntity;

    @OneToMany(() => ShotEntity, (shot) => shot.flight)
    shots: ShotEntity[];
}