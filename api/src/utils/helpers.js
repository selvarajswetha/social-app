import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { jwtSecretKey, mailConfig } from '../config/index.js';
import jwt from 'jsonwebtoken';

export async function genHash(data) {
    return await bcrypt.hash(data, 10);
}
export async function compareHash(data, hash) {
    return await bcrypt.compare(data, hash);
}
export function genToken(payload) {
    return jwt.sign(payload, jwtSecretKey);
}
export function sendMail(email, subject, text) {
    const transporter = nodemailer.createTransport(mailConfig);
    const options = {
        form: `Social App<${mailConfig.auth.user}>`,
        to: email,
        subject: subject,
        text: text
    }

    transporter.sendMail(options).then(() => {
        console.log('Mail send');

    }).catch(error => {
        console.log(error);
    });


}