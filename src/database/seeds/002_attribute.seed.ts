import { Seeder } from 'typeorm-extension';
import * as resource from '@/database/seeds/resource/attributes.json';
import {
  AttributeAggregate,
  AttributeEntity,
  IAttribute,
} from '@/models/attribute';
import { DataSource } from 'typeorm';

export class AttributeSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(AttributeEntity);
    const { data } = resource;

    const items: IAttribute[] = [];

    for (let i = 0; i < data.length; i++) {
      const params = data[i] as IAttribute;

      const item = AttributeAggregate.create(params);
      items.push(item.instance);
    }

    await repository.clear();
    return repository.save(items);
  }
}
