const db = require('../../data/dbConfig');
const User = require('./auth-model');

const checkBody = (req, res, next) => {
    const { username, password } = req.body;

    if(!username.trim() || !password) {
        next({status: 401, message: `username and password required`});
    } else { next() }
}

const checkUsernameExists = async (req, res, next) => {
    const { username } = req.body;

    try {
        const user = await db('users').where({ username }).first()
        if(user){
            next({status: 401, message: `username taken`})
        } else { next() }
    }
    catch (err) {
        next(err)
    }
};












module.exports = {
    checkBody,
    checkUsernameExists,
}
































