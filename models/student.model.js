const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },

    phone:{ 
        type:Number,
        required:true
    },
    email:String
});

const studentModel = mongoose.model("student",studentSchema);
module.exports = studentModel;