const mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.Promise = global.Promise
mongodb_connection = 'mongodb://127.0.0.1:27017/' + 'nodejs-mongo-persistent-dnemedia';
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
    mongodb_connection = process.env.OPENSHIFT_MONGODB_DB_URL + 'nodejs-mongo-persistent-dnemedia'
}
mongoose.connect(mongodb_connection).then(() => {
    console.log("connect DB successfully");
},
    err => {
        console.log('connect failed. Err: ${err}');
    }
);