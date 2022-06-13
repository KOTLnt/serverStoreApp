const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authController = require("../controllers/authController")

router.post("/login", async (req, res) => {
    const { phoneNumber, password } = req.body;
    const id = req.body.id;

    try {
        const user = await authController.login(phoneNumber, password);
        const token = jwt.sign({
            id: user._id
        }, "key",
        {   
            expiresIn: 300,
        })
        res.json({
            user: user ,
            token: token
        });
    } catch(err) {
        res.status(401).send(err.message);
    }

    
});
router.post("/register", async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        const user = await authController.register( phoneNumber, password )
        res.json(user)
    }catch(err) {
        res.status(401).send(err.message)
    }
})


module.exports = router;
