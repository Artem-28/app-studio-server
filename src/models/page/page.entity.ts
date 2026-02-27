import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export const PAGE_TABLE = 'pages';

@Entity({ name: PAGE_TABLE })
export class PageEntity {
  @PrimaryColumn({ unique: true })
  public slug: string;

  @Column({ name: 'meta_title' })
  public meta_title: string;

  @Column({ name: 'meta_description' })
  public meta_description: string;

  @Column({ name: 'h1' })
  public h1: string;

  @Column({ name: 'og_title', nullable: true, type: 'varchar' })
  public og_title: string | null;

  @Column({ name: 'og_description', nullable: true, type: 'varchar' })
  public og_description: string | null;

  @CreateDateColumn({ name: 'created_at' })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updated_at: Date;
}
