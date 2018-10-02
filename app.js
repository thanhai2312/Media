var express = require("express");
var app = express();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const config=require('./helpers/MongoDBHelper')
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set("views", "./views");


var server_port=process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address=process.env.OPENSHIFT_NODEJS_PORT || '127.0.0.1';

app.listen(server_port,server_ip_address);
// const about=require('./models/about')
// About.create({
//     title: "dnemedia",
//     introduction:"test",
//     image:"image",
//     status:true
// })
// about.find().exec((err,result)=>{
//     console.log(result)
// })

// web router
var index=require('./routers/index')
var information=require('./routers/infomation')

app.use('/',index)
app.use('/',information)




module.exports = app;