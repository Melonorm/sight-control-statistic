import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERShotSynhronisedWithAndroidApp1698844391655 implements MigrationInterface {
    name = 'ALTERShotSynhronisedWithAndroidApp1698844391655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shooter" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "father_name" character varying NOT NULL DEFAULT '', "call_name" character varying NOT NULL DEFAULT '', "year_born" character varying, CONSTRAINT "UQ_1bccc568fa4b6cf2e8cef4f64bb" UNIQUE ("uuid"), CONSTRAINT "PK_4697339e92d84886fd397458c69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shot" ("id" BIGSERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "distance" numeric NOT NULL, "height" integer NOT NULL, "accuracy" numeric NOT NULL, "velocity" integer NOT NULL, "elevation" numeric NOT NULL, "azimuth_speed" numeric NOT NULL, "elevation_speed" numeric NOT NULL, "calc_horiz_lead" numeric NOT NULL, "calc_vert_lead" numeric NOT NULL, "fire_horiz_lead" numeric NOT NULL, "fire_vert_lead" numeric NOT NULL, "shoot_time" TIMESTAMP NOT NULL, "flightId" bigint NOT NULL, CONSTRAINT "UQ_4386156632558ff4b9a4149cff6" UNIQUE ("uuid"), CONSTRAINT "PK_270d8a54e9ae132b9368e0d93a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flight" ("id" BIGSERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying, "speed" numeric NOT NULL, "exerciseResultId" integer NOT NULL, CONSTRAINT "UQ_ee8731ef74100611afe6999a6d9" UNIQUE ("uuid"), CONSTRAINT "PK_bf571ce6731cf071fc51b94df03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercise_result" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "timestamp" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL, "shooterId" integer NOT NULL, CONSTRAINT "UQ_073f1b0dff8d6a250833c569678" UNIQUE ("uuid"), CONSTRAINT "PK_1436b75b03359a0707c29c6c604" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shot" ADD CONSTRAINT "FK_610b877b5c1a394a7562b7bde3a" FOREIGN KEY ("flightId") REFERENCES "flight"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "flight" ADD CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3" FOREIGN KEY ("exerciseResultId") REFERENCES "exercise_result"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3"`);
        await queryRunner.query(`ALTER TABLE "shot" DROP CONSTRAINT "FK_610b877b5c1a394a7562b7bde3a"`);
        await queryRunner.query(`DROP TABLE "exercise_result"`);
        await queryRunner.query(`DROP TABLE "flight"`);
        await queryRunner.query(`DROP TABLE "shot"`);
        await queryRunner.query(`DROP TABLE "shooter"`);
    }

}
