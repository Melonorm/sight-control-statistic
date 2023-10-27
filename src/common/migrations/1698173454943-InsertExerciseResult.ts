import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertExerciseResult1698173454943 implements MigrationInterface {
    name = 'InsertExerciseResult1698173454943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercise_result" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "timestamp" integer NOT NULL, "createdAt" date NOT NULL, "shooterId" integer NOT NULL, CONSTRAINT "UQ_073f1b0dff8d6a250833c569678" UNIQUE ("uuid"), CONSTRAINT "PK_1436b75b03359a0707c29c6c604" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`DROP TABLE "exercise_result"`);
    }

}
