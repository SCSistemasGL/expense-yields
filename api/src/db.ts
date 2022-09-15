import { DataSource } from "typeorm";
import { User } from "./entity/User.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alex",
  password: "123456789",
  database: "rendimiento_gastos",
  synchronize: true,
  // logging: true,
  entities: [User],
});
