const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const { boolean, string } = require('joi');


const userData = new schema ({
    
    email: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verify: {
        type: Boolean,
    },
    token: {
        type: String,
    }

});

userData.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "50s",
	});
	return token;    
};

const User = mongoose.model("user", userData);

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        designation: Joi.string().required().label("Designation"),
        password: passwordComplexity().required().label("password"),
    });
    return schema.validate(data);
}
module.exports = {User, validate};