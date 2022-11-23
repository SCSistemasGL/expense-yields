import 'reflect-metadata';
import express, { Request, RequestHandler, Response } from "express";
import morgan from "morgan";
import path from "path";


import * as dotenv from 'dotenv'
dotenv.config()
import { createExpressServer, NotFoundError } from 'routing-controllers';
import routes from "./router";
import controller from './controllers/index'


import httpContext from 'express-http-context';
import { HttpErrorHandler } from './error/ErrorHandler.error';

const app = createExpressServer({
  routePrefix: '/api',
  controllers: controller,
  cors: true,
  middlewares: [HttpErrorHandler],
  defaultErrorHandler: false,
});



const { PORT } = process.env;

/* settings */
app.set("port", PORT ?? 5000);
app.use(morgan("dev"));

app.use((_: Request, res: Response) => {
  if (!res.headersSent) {
    throw new NotFoundError();
  }
});


app.use(express.urlencoded());
app.use(express.json());
app.use(httpContext.middleware);



app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;
