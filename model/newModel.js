const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fild: {
        type: String,
        required: true
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    phn:{
        type:String,
        required:true,
    }

   
});

const Template = mongoose.model("temp", resumeSchema);
module.exports = Template;
