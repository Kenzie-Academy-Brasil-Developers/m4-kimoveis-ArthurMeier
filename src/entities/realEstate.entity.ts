import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Address from "./address.entity";
import Category from "./category.entity";

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

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => Category)
  @JoinColumn()
  Category: Category;
}
export default RealEstate;
