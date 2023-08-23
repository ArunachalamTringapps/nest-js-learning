import { MigrationInterface, QueryRunner } from "typeorm";

export class Newtimestamp1692770516202 implements MigrationInterface {
    name = 'Newtimestamp1692770516202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Created_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Created_at_post" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Updated_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Updated_at_post" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Deleted_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Deleted_at_post" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "Createdat_user"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "Createdat_user" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "Updatedat_user"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "Updatedat_user" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "Deletedat_user"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "Deletedat_user" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "Deletedat_user"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "Deletedat_user" date`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "Updatedat_user"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "Updatedat_user" date`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "Createdat_user"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "Createdat_user" date DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Deleted_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Deleted_at_post" date`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Updated_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Updated_at_post" date`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Created_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Created_at_post" date DEFAULT now()`);
    }

}
