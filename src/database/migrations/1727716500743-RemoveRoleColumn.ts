import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveRoleColumn1727716500743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('artsists', 'role');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
