import { Controller, Get } from '@nestjs/common';
import { ProductService } from '@/modules/product/product.service';
import * as data from '../../database/seeds/resource/pages.json';

@Controller('api/v1/products')
export class ProductController {
  constructor(readonly productService: ProductService) {}

  @Get()
  public list() {
    console.log(data.data);

    return 'products';
  }
}
