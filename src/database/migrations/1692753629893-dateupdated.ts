import { MigrationInterface, QueryRunner } from "typeorm";

export class Dateupdated1692753629893 implements MigrationInterface {
    name = 'Dateupdated1692753629893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Createdat_user" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Updated_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Updated_at_post" date DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Deleted_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Deleted_at_post" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Deleted_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Deleted_at_post" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Updated_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Updated_at_post" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Createdat_user" SET DEFAULT now()`);
    }

}
