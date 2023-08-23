import { MigrationInterface, QueryRunner } from "typeorm";

export class Newcolumnupdate1692767489672 implements MigrationInterface {
    name = 'Newcolumnupdate1692767489672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "Updated_at_post" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "Updated_at_post" SET DEFAULT now()`);
    }

}
