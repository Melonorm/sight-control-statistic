import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERExerciseResultChangeTimestampTypeToBigint1698527809949 implements MigrationInterface {
    name = 'ALTERExerciseResultChangeTimestampTypeToBigint1698527809949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "timestamp"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "timestamp" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "timestamp"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "timestamp" integer NOT NULL`);
    }

}
