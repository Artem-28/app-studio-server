import { BaseAggregate } from '@/models/base';
import {
  AttributeCode,
  IAttribute,
} from '@/models/attribute/attribute.interface';
import {
  IsBoolean,
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional, IsString,
} from 'class-validator';

export class AttributeAggregate
  extends BaseAggregate<IAttribute>
  implements IAttribute
{
  @IsEnum(AttributeCode)
  code: AttributeCode;

  @IsOptional()
  parent_id: number | null = null;

  @IsDefined()
  @IsNumber()
  order: number;

  @IsOptional()
  @IsString()
  value: string | null = null;

  @IsOptional()
  @IsBoolean()
  publish: boolean = true;

  @IsOptional()
  attributes: AttributeAggregate[] = [];

  static create(data: Partial<IAttribute>) {
    const _entity = new AttributeAggregate();
    _entity.update(data);
    return _entity;
  }

  public update(data: Partial<IAttribute>) {
    const { attributes, ...root } = data;
    super.update(root);

    if (attributes) {
      this.setAttributes(attributes);
    }
  }

  public setAttributes(attributes: IAttribute[]) {
    this.attributes = [];

    attributes.forEach((data) => {
      const allowed = this.allowedCodes.includes(data.code);

      if (!allowed) return;

      const attribute = AttributeAggregate.create(data);

      this.attributes.push(attribute);
    });
  }

  get allowedCodes() {
    const allowed = {
      [AttributeCode.SECTION]: Object.values(AttributeCode) as string[],
    };

    return allowed[this.code] || [];
  }

  get instance(): IAttribute {
    return {
      id: this.id,
      parent_id: this.parent_id,
      order: this.order,
      code: this.code,
      value: this.value,
      publish: this.publish,
      attributes: this.attributes.map((attr) => attr.instance),
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
