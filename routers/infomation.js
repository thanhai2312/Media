const mongoose = require('mongoose')
const config = require('../helpers/MongoDBHelper')
const about = require('../models/about')
const contact = require('../models/contact')
const service = require('../models/Service')
var express = require('express')
var router = express.Router()

router.get('/about', (req, res) => {

    const result = about.findOne({ status: true }, (err, result) => {
        if (err) return console.log(err);
        res.render('layouts/about', {
            title: result.title,
            introduction: result.introduction,
            image: result.image
        });
        // console.log('title la ', result)
    });

});

router.get('/contact', (req, res) => {

   
        res.render('layouts/contact');
        // console.log('title la ', result)
    

});

// router.get('/about', (req, res) => {
//     // const result1 = contact.findOne({}, (err, result1) => {
//     //     if (err) return console.log(err);
//     //     res.render('layouts/contact', {
//     //         email: result1.email,
//     //         phone: result1.phone,
//     //         address: result1.address,
//     //         fax: result1.fax,
//     //         link_Facebook: result1.link_Facebook,
//     //         link_Instagram: result1.link_Instagram,
//     //         link_Flickr: result1.link_Flickr,
//     //         link_Youtube: result1.link_Youtube,
//     //         link_Twitter: result1.link_Twitter
//     //     });
//     // });
//     res.render('layouts/service');
// });





module.exports = router;