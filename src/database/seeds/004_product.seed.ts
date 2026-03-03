import { Seeder } from 'typeorm-extension';
import * as resource from '@/database/seeds/resource/products.json';
import { DataSource } from 'typeorm';
import { IProduct, ProductAggregate, ProductEntity } from '@/models/product';

export class ProductSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(ProductEntity);
    const { data } = resource;

    const items: IProduct[] = [];

    for (let i = 0; i < data.length; i++) {
      const params = data[i] as IProduct;

      const item = ProductAggregate.create(params);
      items.push(item.instance);
    }

    await repository.createQueryBuilder().delete().execute();
    return repository.save(items);
  }
}
