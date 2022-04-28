const express = require('express');
const router = express.Router();
const Resident = require('../models/residentModel')




router.get('/all',async(req,res)=>{
    const residents = await Resident.find().lean().exec();
    res.send(residents);
})
//ADD resident
router.post('/' ,async (req,res)=>{
    try{
        const resident = await Resident.create(req.body);
        res.status(200).send(resident);
    }catch(err){
        console.log(err)
    }
})




module.exports = router;
