import express from "express";
import { createUser, deleteUser, getUser, loginUser, updateUser } from "../controllers/user.controller.js";
import { validateCreateUser, validateLoginUser } from "../validators/user.validator.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

router.route('/login').post(validateLoginUser, loginUser);

router.route('/')
    .post(validateCreateUser, createUser)
    .get(verifyUser, getUser)
    .put(updateUser)
    .delete(verifyUser, deleteUser);

export default router;