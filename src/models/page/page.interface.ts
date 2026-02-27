import { IAttribute } from '@/models/attribute';

export interface IPageRoot {
  slug: string;

  meta_title: string;

  meta_description: string;

  h1: string;

  og_title: string | null;

  og_description: string | null;

  created_at: Date;

  updated_at: Date;
}

export interface IPageRelation {
  attributes: IAttribute[];
}

export type IPage = IPageRoot & IPageRelation;
