import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { hCreateTable } from '@/common/utils/database';
import { GroupCode, PRODUCT_GROUP_TABLE } from '@/models/product-group';

const table = hCreateTable(PRODUCT_GROUP_TABLE, [
  {
    name: 'code',
    type: 'enum',
    enum: Object.values(GroupCode),
    enumName: 'group_code',
    isUnique: true,
  },
  {
    name: 'parent_code',
    type: 'enum',
    enum: Object.values(GroupCode),
    enumName: 'group_code',
    isNullable: true,
    default: null,
  },
  {
    name: 'title',
    type: 'varchar',
  },
  {
    name: 'order',
    type: 'int',
  },
  {
    name: 'publish',
    type: 'boolean',
    default: true,
  },
]);

const foreignKeys = [
  new TableForeignKey({
    name: 'fk_parent-group',
    columnNames: ['parent_code'],
    referencedColumnNames: ['code'],
    referencedTableName: PRODUCT_GROUP_TABLE,
    onDelete: 'CASCADE',
  }),
];

export class CreateProductGroupsTable1772460349754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(table, true);
    await queryRunner.createForeignKeys(table, foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(table, foreignKeys);
    await queryRunner.dropTable(table);
  }
}
