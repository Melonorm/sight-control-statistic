import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertShooter1698048481408 implements MigrationInterface {
    name = 'InsertShooter1698048481408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shooter" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "father_name" character varying NOT NULL DEFAULT '', "call_name" character varying NOT NULL DEFAULT '', "year_born" character varying, CONSTRAINT "UQ_1bccc568fa4b6cf2e8cef4f64bb" UNIQUE ("uuid"), CONSTRAINT "PK_4697339e92d84886fd397458c69" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shooter"`);
    }

}
