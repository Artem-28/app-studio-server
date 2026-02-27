import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { ATTRIBUTE_TABLE, AttributeCode } from '@/models/attribute';
import { hCreateTable } from '@/common/utils/database';

const table = hCreateTable(ATTRIBUTE_TABLE, [
  {
    name: 'parent_id',
    isNullable: true,
    type: 'int',
  },
  {
    name: 'order',
    type: 'int',
  },
  {
    name: 'code',
    type: 'enum',
    enum: Object.values(AttributeCode),
    enumName: 'attribute-code',
  },
  {
    name: 'value',
    isNullable: true,
    type: 'varchar',
    default: null,
  },
]);

const foreignKeys = [
  new TableForeignKey({
    name: 'fk_parent-attribute',
    columnNames: ['parent_id'],
    referencedColumnNames: ['id'],
    referencedTableName: ATTRIBUTE_TABLE,
    onDelete: 'CASCADE',
  }),
];

export class CreateAttributesTable1772181621431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(table, true);
    await queryRunner.createForeignKeys(table, foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(table, foreignKeys);
    await queryRunner.dropTable(table);
  }
}
