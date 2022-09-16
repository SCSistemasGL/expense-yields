import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
  Generated,
  ManyToOne,
} from "typeorm";

export enum TypeTrasport {
  AUTO = "auto",
  REMIS = "remis",
  MOTO = "moto",
}

import { UserEntity } from "./User.entity";

@Entity({ name: "registers" })
export class RegisterEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column({ type: "real", nullable: true })
  auto: number;

  @Column({ type: "real", nullable: true })
  remis: number;

  @Column({ type: "real", nullable: true })
  moto: number;

  @Column({ type: "real", nullable: true })
  parking: number;

  @Column({ type: "real", nullable: true })
  housing: number;

  @Column({ type: "real", nullable: true })
  breakfast: number;

  @Column({ type: "real", nullable: true })
  lunch: number;

  @Column({ type: "real", nullable: true })
  dinner: number;

  @Column({ type: "real", nullable: true })
  tip: number;

  @Column({ type: "real", nullable: true })
  bookstore: number;

  @Column({ type: "real", nullable: true })
  seamstress: number;

  @Column({ type: "real", nullable: true })
  encomienda: number;

  @Column({ type: "real", nullable: true })
  correo: number;

  @Column({ type: "real", nullable: true })
  supermarket: number;

  @Column({ type: "real", nullable: true })
  cleaning: number;

  @Column({ type: "real", nullable: true })
  other: number;

  @Column({ type: "real", nullable: true })
  previousBalance: number;

  @Column({ type: "real", nullable: true })
  advancePayment: number;

  @Column({ type: "real", nullable: true })
  reintegrationServicom: number;

  @Column({ type: "real", nullable: true })
  reintegrationUser: number;

  @Column({ type: "real", nullable: true })
  totalSpent: number;

  @Column({
    name: "imageData",
    type: "bytea",
    nullable: true,
  })
  imageData: Buffer;

  @ManyToOne(() => UserEntity, (user) => user.register)
  user: UserEntity;
}
