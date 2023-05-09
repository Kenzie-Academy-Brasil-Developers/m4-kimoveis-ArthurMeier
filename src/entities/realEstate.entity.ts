import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "real_estate" })
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: () => string;

  @Column({ type: "integer", nullable: false })
  size: number;

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "date", nullable: false })
  updatedAt: Date;

  @Column({ type: "integer", nullable: false, unique: true })
  addressId: number;

  @Column({ type: "integer", nullable: false })
  categoryId: number;
}
export default RealEstate;
