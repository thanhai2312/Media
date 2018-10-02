const mongoose=require('mongoose')
const Album=require('../models/album')
var express=require('express')
var router=express.Router()

router.get('/album', (req,res,next)=>{
    const album=Album.find({}).exec()
    .then((album)=>{
        res.render('layouts/album',{album: album})
    }, (err)=>{
        throw err
    });
    
})


module.exports=router;

