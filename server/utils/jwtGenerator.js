const jwt = require("jsonwebtoken")
const config = require('../config/config');

function jwtGenerator(user_id){
    //generates a jwt that expires in an hour
    const payload = {
        user: {
            id: user_id
        }
    }

    return jwt.sign(payload, config.jwt.secret)
}

module.exports = jwtGenerator;