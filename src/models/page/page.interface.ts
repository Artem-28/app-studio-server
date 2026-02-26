import { IBaseEntity } from '@/models/base';

export interface IPage extends IBaseEntity {
  slug: string;

  meta_title: string;

  meta_description: string;

  h1: string;

  og_title: string | null;

  og_description: string | null;
}
