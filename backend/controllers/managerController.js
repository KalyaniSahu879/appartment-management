const express = require('express');
const router = express.Router();
const Manager = require('../models/managerModel')


router.post('/register' ,async (req,res)=>{
    try{
        const manager =await Manager.create(req.body);
        res.status(200).send(manager);
    }catch(err){
        console.log(err)
    }
})


router.post('/login' , async(req,res)=>{
    try{
        const user = await Manager.findOne({email:req.body.email})
        if(user && user.password === req.body.password){
            res.send('login successfull')
        }
        else{
            res.send("wrong credentials")
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router;

