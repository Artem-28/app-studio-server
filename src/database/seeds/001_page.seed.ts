import { Seeder } from 'typeorm-extension';
import * as resource from '../../database/seeds/resource/pages.json';
import { IPageRoot, PageAggregate, PageEntity } from '@/models/page';
import { DataSource } from 'typeorm';

export class PageSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(PageEntity);
    const { data } = resource;

    const items: IPageRoot[] = [];

    for (let i = 0; i < data.length; i++) {
      const item = PageAggregate.create(data[i]);
      items.push(item.instance);
    }

    return repository.save(items);
  }
}
