import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import routes from "./router";
import dotenv from "dotenv";
dotenv.config();

/* Server */
const app = express();
const { PORT } = process.env;

/* settings */
app.set("port", PORT ?? 5000);
app.use(morgan("dev"));
app.use(bodyParser());
app.use(express.json());

/* Routes */
app.use("/api/", routes);

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;
