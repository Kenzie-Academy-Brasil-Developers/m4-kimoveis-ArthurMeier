import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
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
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    // Função simples

    // getRounds validando se a senha já não foi criptografada antes devido ao update
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      // Adicionando ao objeto que irá para o banco a senha criptografada
      this.password = hashSync(this.password, 10);
    }
  }

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt?: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: Date | null | undefined;

  @DeleteDateColumn({ type: "date" })
  deletedAt?: string | Date;
}

export default User;
