import { IBaseEntity } from '@/models/base';

export enum GroupCode {
  DEVELOPMENT = 'development',
  DESIGN = 'design',
  PROMOTION = 'promotion',
  BOT = 'bot',
}

export interface IProductGroup extends IBaseEntity {
  code: GroupCode;

  parent_code: GroupCode | null;

  title: string;

  order: number;

  publish: boolean;

  subgroups: IProductGroup[];
}

export interface IProductGroupData extends Omit<
  Partial<IProductGroup>,
  'subgroups'
> {
  subgroups?: Partial<IProductGroup>[];
}
