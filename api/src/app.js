import express from "express";
import { appConfig } from './config/index.js';

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.listen(appConfig.port, appConfig.host, function () {
    console.log(`App running on http://${appConfig.host}:${appConfig.port}`);
});
