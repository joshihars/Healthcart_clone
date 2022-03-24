const mongoose = require("mongoose");


const signinSchema= new mongoose.Schema({
    email : {type: email, required: true},
    password : {type: String, required: true},
},{
    versionKey: false,
    timestamps: true,
})

module.exports= mongoose.model("signin",signinSchema);