import { Seeder } from 'typeorm-extension';
import * as resource from '../../database/seeds/resource/pages.json';
import { PageAggregate, PageEntity } from '@/models/page';
import { DataSource } from 'typeorm';

export class PageSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(PageEntity);
    const { data } = resource;

    const pages: PageAggregate[] = [];

    for (let i = 0; i < data.length; i++) {
      const item = PageAggregate.create(data[i]);
      pages.push(item);
    }

    await repository.save(pages);
  }
}
