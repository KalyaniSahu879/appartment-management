const express = require('express');
const router = express.Router();
const Flat = require('../models/flatModel')




router.get('/all',async(req,res)=>{
    const flats = await Flat.find().lean().exec();
    res.send(flats);
})
//ADD FLAT
router.post('/addflat' ,async (req,res)=>{
    try{
        const flat = await Flat.create(req.body);
        res.status(200).send(flat);
    }catch(err){
        console.log(err)
    }
})

//UPDATE single FLAT DETAILS

router.put('/:id' , async(req,res)=>{
    try{
        const flat = await Flat.findByIdAndUpdate(req.params.id , req.body);
        res.status(200).send(flat);
    }catch(err){
        console.log(err)
    }
})


//PAGINATION

router.get('/:page' ,async(req,res)=>{
    try{
        let page_no = +(req.params.page);
        let skip_count = (page_no-1)*2;
        let flat = await Flat.find().skip(skip_count).limit(2).lean().exec();
        res.send(flat)
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
