import { DataSource } from "typeorm";
import entities from "./entity"

const { DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME, } = process.env

export const AppDataSource = new DataSource({
  type: "mssql",
  host: DB_HOST,
  port: 1433,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  entities,
  extra: {
    trustServerCertificate: true,
  }
});
