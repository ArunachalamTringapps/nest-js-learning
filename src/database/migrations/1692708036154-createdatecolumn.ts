import { MigrationInterface, QueryRunner } from "typeorm";

export class Createdatecolumn1692708036154 implements MigrationInterface {
    name = 'Createdatecolumn1692708036154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Createdat_user" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Createdat_user" DROP DEFAULT`);
    }

}
