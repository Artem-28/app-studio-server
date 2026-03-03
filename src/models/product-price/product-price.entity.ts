import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {
  CurrencyBankCode,
  PriceType,
} from '@/models/product-price/product-price.interface';
import { BaseEntity } from '@/models/base';
import { ProductEntity } from '@/models/product';

export const PRODUCT_PRICE_TABLE = 'product_prices';

@Entity({ name: PRODUCT_PRICE_TABLE })
export class ProductPriceEntity extends BaseEntity {
  @PrimaryColumn({
    name: 'product_id',
    type: 'int',
  })
  public product_id: number;

  @Column({
    name: 'bank_code',
    type: 'enum',
    enum: CurrencyBankCode,
    enumName: 'currency_bank_code',
  })
  public bank_code: CurrencyBankCode;

  @Column({
    name: 'type',
    type: 'enum',
    enum: PriceType,
    enumName: 'price_type',
  })
  public type: PriceType;

  @Column({
    name: 'value',
    type: 'float',
  })
  public value: number;

  @ManyToOne(() => ProductEntity, (product) => product.prices, {
    onDelete: 'CASCADE', // При удалении продукта удаляются все его цены
  })
  @JoinColumn({ name: 'product_id' })
  public product: ProductEntity;
}
