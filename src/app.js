import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';

dotenv.config();

const app = express();

app.use(indexRouter);

app.listen(process.env.APP_PORT);