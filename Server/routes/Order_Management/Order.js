const router = require("express").Router();
let order = require("../../models/Order_Management/order.js");

router.route("/add").post((req,res) => {

    const color = req.body.color;
    const quantity = req.body.quantity;
    const size = req.body.size;
    const total = req.body.total;

    const newOrder = new order({

        color, quantity, size, total

    })

    newOrder.save().then(() => {
        res.json("order added succesfully..");
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get(async (req,res) => {
    order.find().then((neworder) => {
        res.json(neworder);
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const {color, quantity, size, total} = req.body;

    const updateOrder = {
        color, quantity, size, total
    }

    const update = await order.findByIdAndUpdate(userID, updateOrder).then(() => {

        res.status(200).send({status: "order updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with updating data", error: error.message});
    })

    
})

router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;

    await order.findById(userID).then((order) => {
        //res.status(200).send({status: "user fetched", emp});
        res.json(order);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with fetched user", error: error.message});
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await order.findByIdAndDelete(userID).then(() => {

        res.status(200).send({status: "order deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with delete user", error: error.message});
    })
})

module.exports = router;