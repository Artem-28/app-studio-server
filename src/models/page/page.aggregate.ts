import { IPage } from '@/models/page/page.interface';
import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseAggregate } from '@/models/base';

export class PageAggregate extends BaseAggregate<IPage> implements IPage {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  meta_title: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  meta_description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  h1: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  og_title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  og_description: string;

  static create(data: Partial<IPage>) {
    const _entity = new PageAggregate();
    _entity.update(data);
    return _entity;
  }

  get instance(): IPage {
    return {
      id: this.id,
      slug: this.slug,
      meta_title: this.meta_description,
      meta_description: this.meta_description,
      h1: this.h1,
      og_title: this.og_title,
      og_description: this.og_description,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
