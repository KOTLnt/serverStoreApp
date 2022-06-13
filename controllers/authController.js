const jwt = require("jsonwebtoken");

const { db } = require("../config/db");
const { generate, verify } = require("../utils");

const register = async (phoneNumber, password) => {
    
    const existingUser = await db.users.findOne({
        phoneNumber: phoneNumber,
    });
    if (existingUser) {
        throw new Error ("User already existing");
    }

    const user = {
        phoneNumber: phoneNumber,
    };
    const { salt, hashed } = generate(password);
    user.salt = salt;
    user.hashed = hashed;

    await db.users.insertOne(user);  
    return user;
};

const login = async (phoneNumber, password) => {

    const existingUser = await db.users.findOne({
        phoneNumber: phoneNumber,
    });

    if(!existingUser) {
        throw new Error("User not existing")
    }

    if(!verify(password, existingUser.salt, existingUser.hashed)) {
        throw new Error ("User not connect")
    }
    return existingUser;
}




module.exports = { register, login };