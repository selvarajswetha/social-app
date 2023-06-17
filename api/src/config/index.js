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

const mailConfig = {
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}

const jwtSecretKey = process.env.JWT_SECRET_KEY

export {
    appConfig,
    dbConfig,
    mailConfig,
    jwtSecretKey
}