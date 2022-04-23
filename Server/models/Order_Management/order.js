const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({  

    color:{
        type: String,     
        required: true
    },

    quantity:{
        type: String,
        required: true        
    },

    size:{
        type: String,
        required: true
    },

    total:{
        type: String,
        required: true
    }

})

const order = mongoose.model("order", OrderSchema);

module.exports = order;