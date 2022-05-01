const router = require("express").Router();
let {User, validate} = require("../../models/User_Management/User");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
require("dotenv").config();
const crypto = require('crypto');
var nodemailer = require('nodemailer');

router.route("/add").post(async (req, res) => {    

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const token = crypto.randomBytes(48).toString('hex');

    const link = `http://localhost:3000/verify/${token}`;
    
    var mailOptions = {
        from: 'realasia@gmail.com',
        to: 'chaminduimalsha@gmail.com',
        subject: 'Welcome to RealAsia! You successfully created account.',
        text: 'That was easy!',
        html: `<p><em>To veirfy your account please click <a href="${link}" target="_blank" rel="noopener">Here</a>.</em></p>`
    };

	try {		
        const { error } = validate(req.body.user);
        const user = await User.findOne({ email: req.body.email });

        if (error){
            return res.status(400).send({ message: error.details[0].message });
        }  
        else if (user){
            return res.status(409).send({ message: "User with given email already Exist!" });
        }
        else{

            transporter.sendMail(mailOptions, async function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);

                    const salt = await bcrypt.genSalt(Number(process.env.SALT));
                    const hashPassword = await bcrypt.hash(req.body.password, salt);

                    await new User({ ...req.body, password: hashPassword, verify: false, token: token }).save();
                    res.status(201).send({ message: "User created successfully" });
                }
            });
        }
    	
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});













// router.route("/add___").post((req, res) => {

//     const email = req.body.email;
//     const designation = req.body.designation;
//     const password = req.body.password;

//     const newUser = new User({
//         firstName, surname, email, designation, password
//     })

//     newUser.save().then(() => {
//         res.json("user added successfully");
//     }).catch((err) => {
//         console.log(err);
//     })
// })

router.route("/get").get((req, res) => {
    User.find().then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/find_id/:email").get(async (req, res) => { 
    let Email = req.params.email;

    const query = {
        email: Email
    }

    await User.find(query).then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with fetched user", error: error.message});
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const {firstName, surname, email, designation, password} = req.body;

    const user = {
        firstName, surname, email, designation, password
        }

    const update = await User.findByIdAndUpdate(userID, user).then(() => {

        res.status(200).send({status: "data updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with updating data", error: err.message});
    })    
})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await User.findByIdAndDelete(userID).then(() => {

        res.status(200).send({status: "data deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with delete data", error: err.message});
    })
})



module.exports = router;