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

// [
//     {
//         "code": "development_landing",
//         "title": "Одностраничный сайт",
//         "price": {
//             "start_price": 18000.00,
//             "base_price": null
//         }
//     },
//     {
//         "code": "development_market_place",
//         "title": "Интернет-магазин",
//         "price": {
//             "start_price": 124000.00,
//             "base_price": null
//         }
//     },
//     {
//         "code": "development_mobile_app",
//         "title": "Мобильное приложение",
//         "price": {
//             "start_price": 118000.00,
//             "base_price": null
//         }
//     },
//     {
//         "code": "development_account",
//         "title": "Разработка личного кабинета пользователя",
//         "price": {
//             "start_price": 30000.00,
//             "base_price": null
//         }
//     },
//     {
//         "code": "design_app",
//         "title": "Дизаин сайтов и приложений",
//         "price": {
//             "start_price": 10000.00,
//             "base_price": null
//         }
//     },
//     {
//         "code": "design_logo",
//         "title": "Разработка уникального логотипа",
//         "price": {
//             "start_price": 3000.00,
//             "base_price": null
//         }
//     }
// ]
