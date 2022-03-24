const mongoose = require("mongoose");



const signupSchema= new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: email, required: true},
    password : {type: String, required: true},
},{
    versionKey: false,
    timestamps: true,
})

module.exports= mongoose.model("signup",signupSchema);

