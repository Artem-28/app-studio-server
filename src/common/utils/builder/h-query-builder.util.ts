import { ObjectLiteral, Repository } from 'typeorm';
import { HSelectQueryBuilder } from '@/common/utils/builder/h-select-query-builder.util';
import {
  BuilderOptionsDto,
  DeleteBuilderOptions,
} from '@/common/utils/builder/dto';
import { HDeleteQueryBuilder } from '@/common/utils/builder/h-delete-query-builder.util';

export class HQueryBuilder {
  static select<T extends ObjectLiteral>(
    repository: Repository<T>,
    options?: BuilderOptionsDto<T>,
  ) {
    return new HSelectQueryBuilder<T>(repository, options);
  }

  static delete<T extends ObjectLiteral>(
    repository: Repository<T>,
    options?: DeleteBuilderOptions<T>,
  ) {
    return new HDeleteQueryBuilder(repository, options);
  }
}
