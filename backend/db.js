const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb://127.0.0.1:27017/apartmentDatabase")
        console.log(`connected at ${conn.connection.host}`)

    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB
