import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { RegisterEntity } from "./Register.entity";

@Entity({ name: "pricefuel" })
export class PriceFuelEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nameProvince: string;

  @Column({ nullable: true })
  priceKm: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => RegisterEntity, (register) => register.pricefuel)
  register: RegisterEntity[];
}
