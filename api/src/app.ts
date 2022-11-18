import 'reflect-metadata';
import express, { RequestHandler } from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

import * as dotenv from 'dotenv'
dotenv.config()
import { createExpressServer } from 'routing-controllers';

import controller from './controllers/index'
// import { afterMiddleware } from './middleware/After.middleware';
// import { GlobalErrorHandler } from './error/ErrorHandler.error';

import httpContext from 'express-http-context';
import { HttpErrorHandler } from './error/ErrorHandler.error';

const app = createExpressServer({
  routePrefix: '/api',
  controllers: controller,
  middlewares: [HttpErrorHandler],
  defaultErrorHandler: false,
});


const { PORT } = process.env;

/* settings */
app.set("port", PORT ?? 5000);
app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());
app.use(httpContext.middleware);
// cors
app.use(cors() as RequestHandler);

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;
