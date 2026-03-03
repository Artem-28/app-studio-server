import { IsDate, IsNumber, IsOptional, validateSync } from 'class-validator';
import { IBaseEntity } from '@/models/base/base.interface';
import { DomainError } from '@/common/error';

export class UpdateAggregate<T> {
  public validate() {
    const errors = validateSync(this, { whitelist: true });
    if (!!errors.length) {
      throw new DomainError(errors);
    }
  }
  public update(data: Partial<T>) {
    const entries = Object.entries(data);
    if (entries.length === 0) return;

    entries.forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

export class BaseAggregate<T>
  extends UpdateAggregate<T>
  implements IBaseEntity
{
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsDate()
  created_at = new Date();

  @IsDate()
  updated_at = new Date();

  public update(data: Partial<T>) {
    super.update(data);
    this.updated_at = new Date();
    this.validate();
  }
}
