import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
  OneToMany,
} from "typeorm";
import { RegisterEntity } from "./Register.entity";

export enum UserRole {
  ADMIN = "admin",
  AUDITOR = "auditor",
  USER = "user",
  TREASURER = "treasurer",
}

@Entity({name: "users"})
export class UserEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @PrimaryColumn({ unique: true })
  email: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  password: string;

  @OneToMany(() => RegisterEntity, (register) => register.user)
  register: RegisterEntity[];
}
