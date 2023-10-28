import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERFlightSpeedChangeTypeToDecimal1698447108217 implements MigrationInterface {
    name = 'ALTERFlightSpeedChangeTypeToDecimal1698447108217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "speed"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "speed" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "speed"`);
        await queryRunner.query(`ALTER TABLE "flight" ADD "speed" integer NOT NULL`);
    }

}
