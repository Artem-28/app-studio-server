import { Column, Entity, OneToMany } from 'typeorm';
import { ProductPriceEntity } from '@/models/product-price';
import { BaseEntity } from '@/models/base';
import { GroupCode } from '@/models/product-group';

export const PRODUCT_TABLE = 'products';

@Entity({ name: PRODUCT_TABLE })
export class ProductEntity extends BaseEntity {
  @Column()
  public title: string;

  @Column({
    name: 'group_code',
    type: 'enum',
    enum: GroupCode,
    enumName: 'group_code',
    nullable: true,
  })
  public group_code: GroupCode | null;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: true,
  })
  public description: string | null;

  @Column()
  public publish: boolean;

  @OneToMany(() => ProductPriceEntity, (price) => price.product, {
    cascade: true,
    eager: true,
  })
  public prices: ProductPriceEntity[];
}
