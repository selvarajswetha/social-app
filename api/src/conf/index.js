import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
    host: process.env.HOST,
    port: parseInt(process.env.PORT)
}

const dbConfig = {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    user: process.env.DB_USER

};

export {
    appConfig,
    dbConfig
}