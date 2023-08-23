import { MigrationInterface, QueryRunner } from "typeorm";

export class Newcolumnupdated1692767627933 implements MigrationInterface {
    name = 'Newcolumnupdated1692767627933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Updatedat_user" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "Updatedat_user" SET DEFAULT now()`);
    }

}
