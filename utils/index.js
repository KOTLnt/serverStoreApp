const crypto = require("crypto");

function generate(password) {

    const salt = crypto.randomBytes(128).toString("base64");
    const hashedGenerate = crypto.pbkdf2Sync(
        password,
        salt,
        10000,
        256,
        "sha512"
    );
    return {
        salt: salt,
        hashed: hashedGenerate.toString("hex"),
    }
};

function verify(password, salt,  hashedUser) {
    const hashedVerify = crypto.pbkdf2Sync(
        password,
        salt,
        10000,
        256,
        "sha512"
    );
    return hashedVerify.toString("hex") === hashedUser;
}




module.exports = { generate, verify};
