import { MigrationInterface, QueryRunner } from "typeorm";

export class Updatecascadeuserupdated1692794724343 implements MigrationInterface {
    name = 'Updatecascadeuserupdated1692794724343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "PostOrderColumn" TO "PostOrderNumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "PostOrderNumber" TO "PostOrderColumn"`);
    }

}
