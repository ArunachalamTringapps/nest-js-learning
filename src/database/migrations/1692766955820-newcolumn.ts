import { MigrationInterface, QueryRunner } from "typeorm";

export class Newcolumn1692766955820 implements MigrationInterface {
    name = 'Newcolumn1692766955820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "Post_order_no" numeric`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Created_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Created_at_post" date DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Createdat_user" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Updatedat_user" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Updatedat_user" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Createdat_user" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Created_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Created_at_post" TIMESTAMP DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Post_order_no"`);
    }

}
