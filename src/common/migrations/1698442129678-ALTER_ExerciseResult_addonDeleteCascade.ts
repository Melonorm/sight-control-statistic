import { MigrationInterface, QueryRunner } from "typeorm";

export class ALTERExerciseResultAddonDeleteCascade1698442129678 implements MigrationInterface {
    name = 'ALTERExerciseResultAddonDeleteCascade1698442129678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise_result" DROP CONSTRAINT "FK_54589ebcfed14082ea391dcf734"`);
        await queryRunner.query(`ALTER TABLE "exercise_result" ADD CONSTRAINT "FK_54589ebcfed14082ea391dcf734" FOREIGN KEY ("shooterId") REFERENCES "shooter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
