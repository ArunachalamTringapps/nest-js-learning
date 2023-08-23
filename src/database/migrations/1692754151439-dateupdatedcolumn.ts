import { MigrationInterface, QueryRunner } from "typeorm";

export class Dateupdatedcolumn1692754151439 implements MigrationInterface {
    name = 'Dateupdatedcolumn1692754151439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Created_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Created_at_post" date DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "Created_at_post"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "Created_at_post" TIMESTAMP DEFAULT now()`);
    }

}
