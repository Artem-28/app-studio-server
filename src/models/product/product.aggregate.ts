import {
  IsBoolean,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IProductPrice } from '@/models/product-price/product-price.interface';
import { IProduct, IProductData } from '@/models/product';
import { BaseAggregate } from '@/models/base';
import { ProductPriceAggregate } from '@/models/product-price';

export class ProductAggregate
  extends BaseAggregate<IProductPrice>
  implements IProduct
{
  @IsOptional()
  @IsNumber()
  public price_id: number;

  @IsString()
  @IsDefined()
  public title: string;

  @IsString()
  @IsOptional()
  public description: string | null = null;

  @IsOptional()
  @IsBoolean()
  publish: boolean = true;

  @IsOptional()
  public prices: ProductPriceAggregate[] = [];

  static create(data: IProductData) {
    const _entity = new ProductAggregate();
    _entity.update(data);
    return _entity;
  }

  public update(data: IProductData) {
    const { prices, ...root } = data;
    super.update(root);

    if (prices) {
      prices.forEach((p) => {
        this.prices.push(ProductPriceAggregate.create(p));
      });
    }

    this.updated_at = new Date();

    this.validate();
  }

  get instance(): IProduct {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      created_at: this.created_at,
      updated_at: this.updated_at,
      prices: this.prices.map((p) => p.instance),
    };
  }
}
