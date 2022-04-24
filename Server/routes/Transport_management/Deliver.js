const router = require("express").Router();
let deliver = require("../../models/Transport_management/Deliver.js");

router.route("/add").post((req,res) => {

    const cusName = req.body.cusName;
    const cusCountry = req.body.cusCountry;
    const cusCity = req.body.cusCity;
    const cusEmail = req.body.cusEmail;
    const cusPhone = req.body.cusPhone;
    const cusPCode = req.body.cusPCode;
    const driverName = req.body.driverName;
    const vehicleNo = req.body.vehicleNo;
    const driverID = req.body.driverID;
    const deliveryTime = req.body.deliveryTime;
    const driverPhone = req.body.driverPhone;

    const newDeliver = new deliver({

        cusName, cusCountry, cusCity, cusEmail, cusPhone, cusPCode, driverName, vehicleNo, driverID, deliveryTime, driverPhone

    })

    newDeliver.save().then(() => {
        res.json("deliver added succesfully..");
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get(async (req,res) => {
    deliver.find().then((newDeliver) => {
        res.json(newDeliver);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;