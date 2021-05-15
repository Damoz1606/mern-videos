import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './app/routes/video.router';

import config from './config/config';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use("/api", router);

//static

export default app;