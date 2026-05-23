const jwt = require("jsonwebtoken");

require("dotenv").config();

//generate token
exports.generateToken = (payload) =>{
     return jwt.sign(
        payload,
        process.env.JWT_SECRET,
    {
        expiresIn:"1d"
    }    
 );
};

//verify token
exports.verifyToken = (token) => {
    return jwt.verify(
        token,
        process.env.JWT_SECRET
    );
};