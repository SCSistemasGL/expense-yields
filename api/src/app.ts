import express from "express";
import morgan from "morgan";
// import urlencoded from "url";
import path from "path";
import routes from "./router";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

/* Server */
const app = express();
const { PORT } = process.env;

/* settings */
app.set("port", PORT ?? 5000);
app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());

// cors
app.use(cors());

/* Routes */
app.use("/api/", routes);

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;
