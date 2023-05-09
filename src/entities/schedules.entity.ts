import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./users.entity";
import { RealEstate } from "./realEstate.entity";

@Entity({ name: "schedules" })
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date", nullable: false })
  date: Date;

  @Column({ type: "time", nullable: false })
  hour: string;

  @ManyToOne(() => RealEstate, { onDelete: "CASCADE" })
  realEstate: RealEstate;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}

export default Schedule;
