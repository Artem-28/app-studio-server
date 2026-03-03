import { IProductPrice } from '@/models/product-price';
import { IBaseEntity } from '@/models/base';

export interface IProduct extends IBaseEntity {
  title: string;

  description?: string | null;

  publish?: boolean;

  prices: IProductPrice[];
}

export interface IProductData extends Omit<Partial<IProduct>, 'prices'> {
  prices?: Partial<IProductPrice>[];
}