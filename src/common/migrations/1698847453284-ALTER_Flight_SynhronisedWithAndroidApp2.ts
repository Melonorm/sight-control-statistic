import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERFlightSynhronisedWithAndroidApp21698847453284 implements MigrationInterface {
    name = 'ALTERFlightSynhronisedWithAndroidApp21698847453284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "height" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "no" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "start_x" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "start_y" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "finish_x" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "finish_y" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "duration_sec" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "length_plan" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "heading" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "speed"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "speed" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "speed"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "speed" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "heading"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "length_plan"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "duration_sec"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "finish_y"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "finish_x"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "start_y"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "start_x"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "no"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "type" character varying`);
    }

}
