import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArtsists1727447936242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'artsists',
              columns: [
                {
                  name: 'id',
                  type: 'integer',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'bio',
                  type: 'text',
                },
                {
                  name: 'role',
                  type: 'tinyint',
                  default: 0,
                },
                {
                  name: 'image_url',
                  type: 'varchar',
                },
                {
                  name: 'createdAt',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        console.log('Revert run here');
    await queryRunner.dropTable('artists');
    }

}
