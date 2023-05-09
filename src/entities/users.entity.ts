import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 45, nullable: false, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ type: "varchar", length: 120, nullable: false })
  password: string;

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt?: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: Date | null | undefined;

  @DeleteDateColumn({ type: "date" })
  deletedAt?: string | Date;
}

export default User;
