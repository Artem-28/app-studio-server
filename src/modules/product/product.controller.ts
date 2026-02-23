import { Controller, Get } from '@nestjs/common';
import { ProductService } from '@/modules/product/product.service';

@Controller('api/v1/products')
export class ProductController {
  constructor(readonly productService: ProductService) {}

  @Get()
  public list() {
    return 'products';
  }
}
