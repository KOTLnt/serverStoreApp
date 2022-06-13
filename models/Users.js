const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    phoneNumber: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.module("User", UsersSchema );