import { Module } from '@nestjs/common';
import { CommonModule } from '@/common/common.module';
import { ProductModule } from './modules/product/product.module';
import { ProviderModule } from '@/providers/provider.module';
import { AttributeModule } from './modules/attribute/attribute.module';

@Module({
  imports: [CommonModule, ProviderModule, ProductModule, AttributeModule],
  providers: [],
})
export class AppModule {}
