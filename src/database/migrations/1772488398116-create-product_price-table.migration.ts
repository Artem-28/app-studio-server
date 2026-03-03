import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { hCreateTable } from '@/common/utils/database';
import {
  CurrencyBankCode,
  PriceType,
  PRODUCT_PRICE_TABLE,
} from '@/models/product-price';
import { PRODUCT_TABLE } from '@/models/product';

const table = hCreateTable(PRODUCT_PRICE_TABLE, [
  {
    name: 'product_id',
    type: 'int',
    isPrimary: true,
  },
  {
    name: 'bank_code',
    type: 'enum',
    enum: Object.values(CurrencyBankCode),
    enumName: 'currency_bank_code',
  },
  {
    name: 'type',
    type: 'enum',
    enum: Object.values(PriceType),
    enumName: 'price_type',
  },
  {
    name: 'value',
    type: 'float',
  },
]);

const foreignKeys = [
  new TableForeignKey({
    name: 'fk_product',
    columnNames: ['product_id'],
    referencedColumnNames: ['id'],
    referencedTableName: PRODUCT_TABLE,
    onDelete: 'CASCADE',
  }),
];

export class CreateProductPriceTable1772488398116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(table, true);
    await queryRunner.createForeignKeys(table, foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(table, foreignKeys);
    await queryRunner.dropTable(table);
  }
}
