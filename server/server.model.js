const db = require('./dbConfig');

const findMany = async () => {
    try {
        const result = await db.query('SELECT * FROM `user`');
        return result[0];
    } catch (err) {
        throw new Error(err);
    }
};

const findOne = async (userId) => {
    try {
        const result = await db.query('SELECT * FROM `user` where id = ?', [userId]);
        return result[0];
    } catch (err) {
        throw new Error(err);
    }
};

const findAllFromCategory = async (category) => {
    try {
        const result = await db.query('SELECT * FROM `user` JOIN main_category ON main_category.id = user.id_main_category WHERE main_category.name = ?', [category]);
        return result[0];
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    findMany,
    findOne,
    findAllFromCategory,
};