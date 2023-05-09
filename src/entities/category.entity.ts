import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 42, nullable: false, unique: true })
  name: string;
}

export default Category;
