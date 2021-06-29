const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    getUsersFromCategory,
} = require('./server.controller');

router.get('/users', getUsersFromCategory);
router.get('/users/', getAllUsers);
router.get('/users/:userId', getOneUser);


module.exports = router;