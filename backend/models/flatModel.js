const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    flat_num:{type:String , required:true},
    block:{type:String , required:true},
    flat_type:{type:String , required:true},
    resident_count:{type:Number , required:true}
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("Flat" , flatSchema);