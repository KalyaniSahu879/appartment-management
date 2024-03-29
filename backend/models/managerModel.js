const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    username:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("Manager" , managerSchema);