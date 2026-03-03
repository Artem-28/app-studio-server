import { Seeder } from 'typeorm-extension';
import * as resource from '@/database/seeds/resource/product-groups.json';
import { DataSource } from 'typeorm';
import {
  IProductGroup,
  ProductGroupAggregate,
  ProductGroupEntity,
} from '@/models/product-group';

export class ProductGroupSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(ProductGroupEntity);
    const { data } = resource;

    const items: IProductGroup[] = [];

    for (let i = 0; i < data.length; i++) {
      const params = data[i] as IProductGroup;

      const item = ProductGroupAggregate.create(params);
      items.push(item.instance);
    }

    await repository.createQueryBuilder().delete().execute();
    return repository.save(items);
  }
}
