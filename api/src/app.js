import express from "express";
import cookieParser from "cookie-parser";
import { appConfig } from './config/index.js';
import cors from 'cors';
import userRouter from './routers/user.router.js';
import errorHandler from "./middlewares/errorhandler.js";


const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use('/api/users', userRouter);

app.use(errorHandler);

app.listen(appConfig.port, appConfig.port, () => {
    console.log(`App running on http://${appConfig.host}:${appConfig.port}`);
});
