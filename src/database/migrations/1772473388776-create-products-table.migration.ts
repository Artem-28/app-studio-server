import { MigrationInterface, QueryRunner } from 'typeorm';
import { hCreateTable } from '@/common/utils/database';
import { PRODUCT_TABLE } from '@/models/product';

const table = hCreateTable(PRODUCT_TABLE, [
  {
    name: 'title',
    type: 'varchar',
  },
  {
    name: 'description',
    type: 'varchar',
    isNullable: true,
  },
  {
    name: 'publish',
    type: 'boolean',
    default: true,
  },
]);

export class CreateProductsTable1772473388776 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
