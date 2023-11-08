import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERShooterSynhronisedWithAndroidApp21699439034820 implements MigrationInterface {
    name = 'ALTERShooterSynhronisedWithAndroidApp21699439034820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "year_born" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shooter" ALTER COLUMN "year_born" DROP NOT NULL`);
    }

}
