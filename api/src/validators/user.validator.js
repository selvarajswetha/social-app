import userService from "../services/user.service.js";


async function validateCreateUser(req, res, next) {

    try {
        const email = req.body.email;
        const password = req.body.password;

        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!email) {
            return res.status(400).send({
                message: 'Email required'
            });
        } else if (typeof email !== 'string') {
            return res.status(400).send({
                message: 'Invaild email'
            });
        } else if (email.trim().length > 300) {
            return res.status(400).send({
                message: 'Email is too long'
            });
        } else if (!emailRegExp.test(email.trim())) {
            return res.status(400).send({
                message: 'Invaild email'
            });
        }
        if (!password) {
            return res.status(400).send({
                message: 'Paasword required'
            });
        } else if (typeof password !== 'string') {
            return res.status(400).send({
                message: 'Invaild password'
            });
        } else if (password.length < 8 || password.length > 16) {
            return res.status(400).send({
                message: 'Password must be between 8 to 16 characters'
            });
        }
        const user = await userService.findByUnique(email.trim());
        if (user) {
            return res.status(409).send({
                message: 'Email already exit'
            });
        }

        req.body.email = email.trim();

        next();
    } catch (error) {
        res.status(500).send({
            message: 'Validation error'
        });
    }

}
async function validateLoginUser(req, res, next) {

    try {
        const email = req.body.email;
        const password = req.body.password;

        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!email) {
            return res.status(400).send({
                message: 'Email required'
            });
        } else if (typeof email !== 'string') {
            return res.status(400).send({
                message: 'Invaild email'
            });
        }
        if (!password) {
            return req.status(400).send({
                message: 'Paasword required'
            });
        } else if (typeof password !== 'string') {
            return res.status(400).send({
                message: 'Invaild password'
            });
        }
        req.body.email = email.trim();

        next();

    } catch (error) {
        res.status(500).send({
            message: 'Validation error'
        });
    }

}
export {
    validateCreateUser,
    validateLoginUser
};