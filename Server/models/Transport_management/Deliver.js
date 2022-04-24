const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DeliverSchema = new Schema({

    cusName: {
        type: String
    },

    cusCountry: {
        type: String
    },

    cusCity: {
        type: String
    },

    cusEmail: {
        type: String
    },

    cusPhone: {
        type: String
    },

    cusPCode: {
        type: String
    },

    driverName: {
        type: String,
        required: true
    },

    vehicleNo: {
        type: String,
        required: true
    },

    driverID: {
        type: String,
        required: true
    },

    deliveryTime: {
        type: String,
        required: true
    },

    driverPhone: {
        type: String,
        required: true
    }    

})

const deliver = mongoose.model("deliver", DeliverSchema);

module.exports = deliver;