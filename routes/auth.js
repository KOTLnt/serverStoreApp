const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authController = require("../controllers/authController")


/*Login */
router.get("/login",  ( req, res, next) => {
    res.json("users")
})
router.post("/login", async (req, res) => {
    const { phoneNumber, password } = req.body;
    const id = req.body.id;

    try {
        const user = await authController.login(phoneNumber, password);
        const token = jwt.sign({
            phoneNumber: user.phoneNumber,
            id: user._id
        }, "LAVIE-CUSTOMER-TOKEN",
        {    
            expiresIn: 300,
        })
        res.json({
            phoneNumber: phoneNumber ,
            token: token
        });
    } catch(err) {
        res.status(401).send(err.message);
    }

    
});

/*Register*/
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
