const express = require("express");
const router = express.Router();
const collection = require("../mongo")

router.route("/register").post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const newInfo = new collection({
        email,
        password
    });

    newInfo.save();
})

module.exports = router;