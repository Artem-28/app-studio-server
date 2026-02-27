import { IBaseEntity } from '@/models/base';

export enum AttributeCode {
  SECTION = 'section',
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  TEXT = 'text',
}

export interface IAttributeRoot extends IBaseEntity {
  parent_id: number | null;

  order: number;

  code: AttributeCode;

  value: string | null;
}

export interface IAttributeRelation {
  attributes: IAttribute[];
}

export type IAttribute = IAttributeRoot & IAttributeRelation;
