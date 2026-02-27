import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IBaseEntity} from '@/models/base/base.interface';

export abstract class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ name: 'created_at' })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updated_at: Date;
}
