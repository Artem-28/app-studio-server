import { MigrationInterface, QueryRunner } from 'typeorm';
import { hCreateTable } from '@/common/utils/database';
import { PAGE_TABLE } from '@/models/page';

const table = hCreateTable(
  PAGE_TABLE,
  [
    {
      name: 'slug',
      type: 'varchar',
      isUnique: true,
      isPrimary: true,
    },
    {
      name: 'meta_title',
      type: 'varchar',
    },
    {
      name: 'meta_description',
      type: 'varchar',
    },
    {
      name: 'h1',
      type: 'varchar',
    },
    {
      name: 'og_title',
      type: 'varchar',
      isNullable: true,
    },
    {
      name: 'og_description',
      type: 'varchar',
      isNullable: true,
    },
  ],
  { columnId: false },
);

export class CreatePagesTable1772124109780 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
