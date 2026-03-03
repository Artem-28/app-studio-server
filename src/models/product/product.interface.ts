import { IProductPrice } from '@/models/product-price';
import { IBaseEntity } from '@/models/base';
import { GroupCode } from '@/models/product-group';

export interface IProduct extends IBaseEntity {
  title: string;

  group_code: GroupCode | null;

  description?: string | null;

  publish?: boolean;

  prices: IProductPrice[];
}

export interface IProductData extends Omit<Partial<IProduct>, 'prices'> {
  prices?: Partial<IProductPrice>[];
}
