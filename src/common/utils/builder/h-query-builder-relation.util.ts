import {
  BuilderRelationDto,
  BuilderRelationMethod,
} from '@/common/utils/builder/dto';
import { DeleteQueryBuilder, ObjectLiteral, SelectQueryBuilder } from 'typeorm';

export class HQueryBuilderRelation {
  private readonly _relation: BuilderRelationDto;
  private readonly _alias: string;
  constructor(relation: BuilderRelationDto, alias: string) {
    this._relation = relation;
    this._alias = alias || '';
  }

  get name(): string {
    const names = this._relation.name.split('.');
    if (names.length > 1 || !this._alias) return this._relation.name;
    return `${this._alias}.${this._relation.name}`;
  }

  private get _method(): BuilderRelationMethod {
    return this._relation.method || 'leftJoin';
  }

  private get _relationAlias(): string {
    return this._relation.alias || this._relation.name;
  }

  public set<T extends ObjectLiteral>(
    builder: SelectQueryBuilder<T> | DeleteQueryBuilder<T>,
  ) {
    const params = [this.name, this._relationAlias];
    if (this._relation.condition) {
      params.push(this._relation.condition);
    }
    builder[this._method](...params);
  }
}
