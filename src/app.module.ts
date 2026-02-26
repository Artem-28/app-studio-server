import { Module } from '@nestjs/common';
import { CommonModule } from '@/common/common.module';
import { ProductModule } from './modules/product/product.module';
import { ProviderModule } from '@/providers/provider.module';

@Module({
  imports: [CommonModule, ProviderModule, ProductModule],
  providers: [],
})
export class AppModule {}
