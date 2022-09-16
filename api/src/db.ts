import { DataSource } from "typeorm";
import { UserEntity } from "./entity/User.entity";
import { RegisterEntity } from "./entity/Register.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alex",
  password: "123456789",
  database: "rendimiento_gastos",
  synchronize: true,
  // logging: true,
  entities: [UserEntity, RegisterEntity],
});
