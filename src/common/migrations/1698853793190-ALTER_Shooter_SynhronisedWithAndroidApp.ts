import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERShooterSynhronisedWithAndroidApp1698853793190 implements MigrationInterface {
    name = 'ALTERShooterSynhronisedWithAndroidApp1698853793190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shooter" ADD "group_name" character varying`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP CONSTRAINT "PK_4697339e92d84886fd397458c69"`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "shooter" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" ADD CONSTRAINT "PK_4697339e92d84886fd397458c69" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "father_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "father_name" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "call_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "call_name" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP COLUMN "year_born"`);
        await queryRunner.query(`ALTER TABLE "shooter" ADD "year_born" integer`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "shooterId"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "shooterId" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP COLUMN "shooterId"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD "shooterId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP COLUMN "year_born"`);
        await queryRunner.query(`ALTER TABLE "shooter" ADD "year_born" character varying`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "call_name" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "call_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "father_name" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "father_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP CONSTRAINT "PK_4697339e92d84886fd397458c69"`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "shooter" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shooter" ADD CONSTRAINT "PK_4697339e92d84886fd397458c69" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "shooter" DROP COLUMN "group_name"`);
    }

}
