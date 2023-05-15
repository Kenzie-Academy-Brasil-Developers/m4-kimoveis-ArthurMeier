import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import RealEstate from "./realEstate.entity";

@Entity({ name: "addresses" })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  street: string;

  @Column({ type: "varchar", length: 8, nullable: false })
  zipCode: string;

  @Column({ type: "varchar", length: 7, nullable: true })
  number: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  city: string;

  @Column({ type: "varchar", length: 2, nullable: false })
  state: string;

  @OneToOne(() => RealEstate)
  realEstate: RealEstate;
}

export default Address;
