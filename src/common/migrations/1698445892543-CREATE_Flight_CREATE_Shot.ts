import { MigrationInterface, QueryRunner } from "typeorm";

export class CREATEFlightCREATEShot1698445892543 implements MigrationInterface {
    name = 'CREATEFlightCREATEShot1698445892543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`CREATE TABLE "shot" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "distance" integer NOT NULL, "height" integer NOT NULL, "accuracy" integer NOT NULL, "flightId" integer NOT NULL, CONSTRAINT "UQ_4386156632558ff4b9a4149cff6" UNIQUE ("uuid"), CONSTRAINT "PK_270d8a54e9ae132b9368e0d93a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flight" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying, "speed" integer NOT NULL, "exerciseResultId" integer NOT NULL, CONSTRAINT "UQ_ee8731ef74100611afe6999a6d9" UNIQUE ("uuid"), CONSTRAINT "PK_bf571ce6731cf071fc51b94df03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shot" ADD CONSTRAINT "FK_610b877b5c1a394a7562b7bde3a" FOREIGN KEY ("flightId") REFERENCES "flight"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "flight" ADD CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3" FOREIGN KEY ("exerciseResultId") REFERENCES "exercise_result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`ALTER TABLE "flight" DROP CONSTRAINT "FK_b74d0b5a4cb720ba417442d62b3"`);
        await queryRunner.query(`ALTER TABLE "shot" DROP CONSTRAINT "FK_610b877b5c1a394a7562b7bde3a"`);
        await queryRunner.query(`DROP TABLE "flight"`);
        await queryRunner.query(`DROP TABLE "shot"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
