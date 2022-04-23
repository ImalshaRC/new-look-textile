const mongoose = require("mongoose");
require('dotenv').config()
MONGO = "mongodb+srv://newlooktextile:newtextile@cluster0.0fhax.mongodb.net/newlooktextiledb?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
}).then(()=>{
    console.log("db Connected Successfully");
}).catch((err)=>{
    console.log(err);
})