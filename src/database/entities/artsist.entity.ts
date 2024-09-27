import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('artsists')
export class Art {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  name: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column()
  bio: string;

  @Column({ nullable: true })
  image_url: string;
}
