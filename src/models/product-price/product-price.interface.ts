import { IBaseEntity } from '@/models/base';

export enum CurrencyBankCode {
  RUB = 'RUB',
}

export enum PriceType {
  START = 'start_price',
  BASE = 'base_price',
}

export interface IProductPrice extends IBaseEntity {
  product_id?: number;

  bank_code: CurrencyBankCode;

  type: PriceType;

  value: number;
}
