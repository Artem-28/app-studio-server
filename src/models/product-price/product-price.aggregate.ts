import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator';
import {
  CurrencyBankCode,
  IProductPrice,
  PriceType,
} from '@/models/product-price/product-price.interface';
import { BaseAggregate } from '@/models/base';

export class ProductPriceAggregate
  extends BaseAggregate<IProductPrice>
  implements IProductPrice
{
  @IsOptional()
  @IsNumber()
  product_id?: number;

  @IsOptional()
  @IsEnum(CurrencyBankCode)
  public bank_code: CurrencyBankCode = CurrencyBankCode.RUB;

  @IsDefined()
  @IsEnum(PriceType)
  public type: PriceType;

  @IsDefined()
  @IsNumber()
  public value: number;

  static create(data: Partial<IProductPrice>) {
    const _entity = new ProductPriceAggregate();
    _entity.update(data);
    return _entity;
  }

  public update(data: Partial<IProductPrice>) {
    super.update(data);
    this.updated_at = new Date();
    this.validate();
  }

  get instance(): IProductPrice {
    return {
      id: this.id,
      product_id: this.product_id,
      type: this.type,
      bank_code: this.bank_code,
      value: this.value,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
