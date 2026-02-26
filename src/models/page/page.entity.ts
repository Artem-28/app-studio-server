import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '@/models/base';

export const PAGE_TABLE = 'pages';

@Entity({ name: PAGE_TABLE })
export class PageEntity extends BaseEntity {
  @PrimaryColumn({ unique: true })
  public slug: string;

  @Column({ name: 'meta_title' })
  public meta_title: string;

  @Column({ name: 'meta_description' })
  public meta_description: string;

  @Column({ name: 'h1' })
  public h1: string;

  @Column({ name: 'og_title', nullable: true })
  public og_title: string;

  @Column({ name: 'og_description', nullable: true })
  public og_description: string;
}
