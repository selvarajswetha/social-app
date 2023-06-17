import userService from '../services/user.service.js';
import { genHash, genToken, sendMail } from '../utils/helpers.js';
import { compareHash } from '../utils/helpers.js';

async function createUser(req, res, next) {

    try {
        const email = req.body.email;
        const password = await genHash(req.body.password);

        await userService.insert({ email, password });

        sendMail(email, 'Account Creation', 'Welcome to social media app,Your account has been succefully created');

        res.status(200).send({
            message: 'User Created'
        });
    } catch (error) {
        next(error);
    }

}

async function loginUser(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await userService.findByUnique(email);
        if (!user) {
            return res.status(404).send({
                message: 'Wrong user/password'
            });
        }
        const vaildPassword = await compareHash(password, user.password);

        if (!vaildPassword) {
            return res.status(400).send({
                message: 'Wrong user/password'
            });
        }
        const token = genToken({ id: user.id })

        const cookieOptions = {
            sameSite: 'none',
            httpOnly: true
        }

        res.cookie('accesstoken', token, cookieOptions).status(200).send({
            message: 'User logged in'
        });

    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {

    try {
        const id = req.userId;
        const user = await userService.findById(id);

        if (!user) {
            return res.status(404).send({
                message: 'No such user found'
            })
        }
        res.status(200).send({
            email: user.email,
            name: user.name,
            profilePicture: user.profilePicture
        })

    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {

}

async function deleteUser(req, res, next) {
    try {
        const id = req.userId;

        const user = await userService.findById(id);

        await userService.deleteById(id);

        sendMail(user.email, 'Account Deletion', 'your account was successfully deleted');

        res.status(200).send({
            message: 'Account deleted'
        })
    } catch (error) {
        next(error);
    }
}
export {
    createUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}