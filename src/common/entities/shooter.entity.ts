/**
 * Created by Vitalii Shvaher.
 * 19.10.2023.
 */
import {Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ExerciseResultEntity} from "./exerciseResult.entity";

@Entity({ name: 'shooter' })
export class ShooterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'uuid', unique: true })
    @Generated('uuid')
    uuid: string;

    @Column({ name: 'first_name', type: 'varchar', nullable: false })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', nullable: false })
    lastName: string;

    @Column({ name: 'father_name', type: 'varchar', nullable: false, default: '' })
    fatherName?: string;

    @Column({ name: 'call_name', type: 'varchar', nullable: false, default: '' })
    callName?: string;  // позывной

    @Column({ name: 'year_born', type: 'varchar', nullable: true })
    yearBorn?: number;


    @OneToMany(() => ExerciseResultEntity, (exerciseResult) => exerciseResult.shooter)
    exerciseResults: ExerciseResultEntity[];
}