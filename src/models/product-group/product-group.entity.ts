import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '@/models/base';
import { GroupCode } from '@/models/product-group/product-group.interface';

export const PRODUCT_GROUP_TABLE = 'product_groups';

@Entity({ name: PRODUCT_GROUP_TABLE })
export class ProductGroupEntity extends BaseEntity {
  @Column({
    name: 'code',
    type: 'enum',
    enum: GroupCode,
    enumName: 'group_code',
    unique: true,
  })
  public code: GroupCode;

  @Column({
    name: 'parent_code',
    type: 'enum',
    enum: GroupCode,
    enumName: 'group_code',
    nullable: true,
  })
  public parent_code: GroupCode | null;

  @Column()
  public title: string;

  @Column()
  public order: number;

  @Column()
  public publish: boolean;

  @OneToMany(() => ProductGroupEntity, (group) => group.parent, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public subgroups: ProductGroupEntity[];

  @ManyToOne(() => ProductGroupEntity, (group) => group.subgroups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_code' })
  public parent: ProductGroupEntity;
}
