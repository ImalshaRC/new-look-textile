const router = require("express").Router();
let payment = require("../../models/Order_Management/payment.js");

router.route("/add").post((req,res) => {

    const fullName = req.body.fullName;
    const phone = req.body.phone;
    const email = req.body.email;
    const country = req.body.country;
    const city = req.body.city;
    const sAddress = req.body.sAddress;
    const pCode = req.body.pCode;
    const method = req.body.method;

    const newPayment = new payment({

        fullName, phone, email, country, city, sAddress, pCode, method

    })

    newPayment.save().then(() => {
        res.json("payment added succesfully..");
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;