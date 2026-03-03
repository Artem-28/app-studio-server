import { BaseAggregate } from '@/models/base';
import {
  IsBoolean,
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  GroupCode,
  IProductGroup,
  IProductGroupData,
} from '@/models/product-group/product-group.interface';

export class ProductGroupAggregate
  extends BaseAggregate<IProductGroup>
  implements IProductGroup
{
  @IsDefined()
  @IsEnum(GroupCode)
  code: GroupCode;

  @IsOptional()
  @IsEnum(GroupCode)
  parent_code: GroupCode | null = null;

  @IsDefined()
  @IsString()
  title: string;

  @IsDefined()
  @IsNumber()
  order: number;

  @IsOptional()
  @IsBoolean()
  publish: boolean = true;

  @IsOptional()
  subgroups: ProductGroupAggregate[] = [];

  static create(data: IProductGroupData) {
    const _entity = new ProductGroupAggregate();
    _entity.update(data);
    return _entity;
  }

  public update(data: IProductGroupData) {
    const { subgroups, ...root } = data;
    super.update(root);

    if (subgroups) {
      subgroups.forEach((g) => {
        this.subgroups.push(
          ProductGroupAggregate.create({ ...g, parent_code: this.code }),
        );
      });
    }
  }

  get instance(): IProductGroup {
    return {
      id: this.id,
      code: this.code,
      parent_code: this.parent_code,
      order: this.order,
      title: this.title,
      publish: this.publish,
      created_at: this.created_at,
      updated_at: this.updated_at,
      subgroups: this.subgroups.map((g) => g.instance),
    };
  }
}
