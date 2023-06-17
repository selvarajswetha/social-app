import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../config/index.js';

async function verifyUser(req, res, next) {
    try {

        const token = req.cookies.accesstoken.split(' ')[0];
        const valid = jwt.verify(token, jwtSecretKey);

        if (valid) {

            const { id } = jwt.decode(token);
            req.userId = id;
        }


        else {

            throw new Error('Invalid token');

        }
        next();

    } catch (error) {

        res.status(401).send({
            maessage: 'Token verification failed'
        })
    }
}

export default verifyUser;