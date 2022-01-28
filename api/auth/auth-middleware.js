const db = require('../../data/dbConfig');
const User = require('./auth-model');

const checkBody = (req, res, next) => {
    const { username, password } = req.body;

    if(!username.trim() || !password) {
        next({status: 401, message: `username and password required`});
    } else { next() }
}














module.exports = {
    checkBody,

}
































