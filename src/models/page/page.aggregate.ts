import { IPage, IPageRoot } from '@/models/page/page.interface';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';
import { DomainError } from '@/common/error';
import { AttributeAggregate } from '@/models/attribute';

export class PageAggregate implements IPage {
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

  @IsDate()
  created_at = new Date();

  @IsDate()
  updated_at = new Date();

  @IsOptional()
  attributes: AttributeAggregate[] = [];

  static create(data: Partial<IPage>) {
    const _entity = new PageAggregate();
    _entity.update(data);
    return _entity;
  }

  public update(data: Partial<IPage>) {
    const entries = Object.entries(data);
    if (entries.length === 0) return;

    entries.forEach(([key, value]) => {
      this[key] = value;
    });
    this.updated_at = new Date();

    const errors = validateSync(this, { whitelist: true });
    if (!!errors.length) {
      throw new DomainError(errors);
    }
  }

  get instance(): IPageRoot {
    return {
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
