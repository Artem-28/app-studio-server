import { HBaseQueryBuilder } from '@/common/utils/builder/h-base-query-builder.util';
import { DeleteQueryBuilder, ObjectLiteral, Repository } from 'typeorm';
import { DeleteBuilderOptions } from '@/common/utils/builder/dto';

export class HDeleteQueryBuilder<
  T extends ObjectLiteral,
> extends HBaseQueryBuilder<T> {
  declare _builder: DeleteQueryBuilder<T>;

  constructor(repository: Repository<T>, options?: DeleteBuilderOptions<T>) {
    super(repository);
    const { filter, relation } = options || {};

    if (filter) this.filter(filter);
    if (relation) this.relation(relation);
  }

  get builder() {
    this._builder = this._repository.createQueryBuilder().delete();
    this._setupRelation();
    this._setupFilter();
    return this._builder;
  }
}
