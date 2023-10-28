import {Column, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ExerciseResultEntity} from "./exerciseResult.entity";
import {ShotEntity} from "./shot.entity";

@Entity({ name: 'flight' })
export class FlightEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'type', nullable: true })
    type?: string;

    @Column({ name: 'speed', nullable: false, type: 'decimal' })
    speed: number;

    @Column()
    exerciseResultId: number;


    @ManyToOne(() => ExerciseResultEntity, (exerciseResult) => exerciseResult.flights,
        { onDelete: "CASCADE", onUpdate: "CASCADE" })
    exerciseResult: ExerciseResultEntity;

    @OneToMany(() => ShotEntity, (shot) => shot.flight)
    shots: ShotEntity[];
}