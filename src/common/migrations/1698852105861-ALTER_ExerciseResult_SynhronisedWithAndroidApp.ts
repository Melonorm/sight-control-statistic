import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERExerciseResultSynhronisedWithAndroidApp1698852105861 implements MigrationInterface {
    name = 'ALTERExerciseResultSynhronisedWithAndroidApp1698852105861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "created_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "difficulty_level" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "hits_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "targets_count" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "shells_used" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "info_level" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "points" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" DROP CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "PK_1436b75b03359a0707c29c6c604"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "PK_1436b75b03359a0707c29c6c604" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "exerciseResultId"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "exerciseResultId" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3" FOREIGN KEY ("exerciseResultId") REFERENCES "exercise_result"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" DROP CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "exerciseResultId"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "exerciseResultId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "PK_1436b75b03359a0707c29c6c604"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "PK_1436b75b03359a0707c29c6c604" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "flight" ADD CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3" FOREIGN KEY ("exerciseResultId") REFERENCES "exercise_result"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "points"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "info_level"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "shells_used"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "targets_count"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "hits_count"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "difficulty_level"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "createdAt" TIMESTAMP NOT NULL`);
    }

}
