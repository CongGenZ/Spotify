import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAlbums1727524083335 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'albums',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'createAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'release_date',
            type: 'date',
          },
          {
            name: 'artsist_id',
            type: 'integer',
          },
          {
            name: 'cover_url',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
        'albums',
        new TableForeignKey({
          columnNames: ['artsist_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'artsists',
          onDelete: 'CASCADE',
        }),
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('albums')
  }
}
