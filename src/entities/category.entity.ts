import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import RealEstate from "./realEstate.entity";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 42, nullable: false, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (RealEstate) => RealEstate.category)
  RealEstate: RealEstate[];
}

export default Category;
