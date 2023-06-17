import query from "./db.service.js";

async function insert({ email, password }) {
    try {

        const sql = 'INSERT INTO `users`(`email`,`password`) VALUES (?,?);';
        const params = [email, password];

        const res = await query(sql, params);
        return res.insterId;
    } catch (error) {
        throw error;
    }

}
async function findById(id) {
    try {

        const sql = 'SELECT * FROM `users` WHERE `id`=?;';
        const params = [id];

        const res = await query(sql, params);
        return res[0];
    } catch (error) {
        throw error;
    }

}
async function findByUnique(email) {
    try {

        const sql = 'SELECT * FROM `users` WHERE `email`=?;';
        const params = [email];

        const res = await query(sql, params);
        return res[0];
    } catch (error) {
        throw error;
    }
}

async function deleteById(id) {
    try {

        const sql = 'SELECT * FROM `users` WHERE `id`=?;';
        const params = [id];

        const res = await query(sql, params);
        return res[0];
    } catch (error) {
        throw error;
    }

}
export default {
    insert,
    findById,
    findByUnique,
    deleteById
}