import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@/models/base';
import { AttributeCode } from '@/models/attribute/attribute.interface';

export const ATTRIBUTE_TABLE = 'attributes';

@Entity({ name: ATTRIBUTE_TABLE })
export class AttributeEntity extends BaseEntity {
  @Column({ name: 'parent_id', nullable: true })
  public parent_id: number | null;

  @Column()
  public order: number;

  @Column({
    name: 'code',
    type: 'enum',
    enum: AttributeCode,
    enumName: 'attribute_code',
  })
  public code: AttributeCode;

  @Column({ nullable: true, type: 'varchar' })
  public value: string | null;

  @OneToMany(() => AttributeEntity, (attribute) => attribute.parent, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public attributes: AttributeEntity[];

  @ManyToOne(() => AttributeEntity, (attribute) => attribute.attributes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_id' })
  public parent: AttributeEntity;
}
