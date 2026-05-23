const User = require("../models/userModel");


//find user by email
exports.findUserByEmail = async(email)=> {
    return await User.findOne({email});
};

//create user
exports.createUser = async(userData) => {
    return await User.create(userData);
}