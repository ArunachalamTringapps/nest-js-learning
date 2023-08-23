import { MigrationInterface, QueryRunner } from "typeorm";

export class Updatecascadeuser1692794556099 implements MigrationInterface {
    name = 'Updatecascadeuser1692794556099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "Post_order_no" TO "PostOrderColumn"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "PostOrderColumn" TO "Post_order_no"`);
    }

}
