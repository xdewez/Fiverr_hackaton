const {
    findMany,
    findOne,
    findAllFromCategory,
} = require('./server.model');

// Retrieve all freelancers
const getAllUsers = async (req, res) => {
    try {
        const rawData = await findMany();
        res.json(rawData);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Retrieve a specific freelancer and his details
const getOneUser = async (req, res) => {
    try {
        const rawData = await findOne(req.params.userId);
        if (rawData.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(rawData);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Retrieve all freelancers working in the selected category
const getUsersFromCategory = async (req, res) => {
    try {
        const rawData = await findAllFromCategory(req.query.category);
        res.json(rawData);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    getUsersFromCategory,
};