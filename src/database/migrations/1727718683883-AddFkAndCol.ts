import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddFkAndCol1727718683883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Thêm cột 'artist_id' vào bảng 'songs'
    await queryRunner.addColumn(
      'songs',
      new TableColumn({
        name: 'artsist_id',
        type: 'int', // hoặc 'uuid' nếu bạn sử dụng UUID cho artist
        isNullable: false,
      }),
    );

    // Thêm khoá ngoại từ 'songs' đến bảng 'artists'
    await queryRunner.createForeignKey(
      'songs',
      new TableForeignKey({
        columnNames: ['artsist_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'artsists',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'songs',
      new TableForeignKey({
        columnNames: ['album_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'albums',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Xóa khoá ngoại của 'artist_id'
    const table = await queryRunner.getTable('songs');
    const artistForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('artsist_id') !== -1,
    );
    await queryRunner.dropForeignKey('songs', artistForeignKey);

    // Xóa khoá ngoại của 'album_id'
    const albumForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('album_id') !== -1,
    );
    await queryRunner.dropForeignKey('songs', albumForeignKey);

    // Xóa cột 'artist_id' và 'album_id'
    await queryRunner.dropColumn('songs', 'artsist_id');
    await queryRunner.dropColumn('songs', 'album_id');
  }
}
