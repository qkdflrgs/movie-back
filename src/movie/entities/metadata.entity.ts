import { CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

export abstract class Metadata {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}
