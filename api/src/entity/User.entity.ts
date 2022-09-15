import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  AUDITOR = "auditor",
  USER = "user",
  TREASURER ="treasurer"
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @PrimaryColumn({unique: true})
  email: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({default: true})
  isActive: boolean

  @Column()
  password: string
}
