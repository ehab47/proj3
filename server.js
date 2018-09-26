const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
// Npm require ========================

// EXPORT START ===========================
const model = require('./models');
// EXPORT END ===========================

const port = process.env.PORT || 3001;


// MONGO CONNECTION START ========================
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
});
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
// heroku deployment
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to Mongodb");
// }).catch(err => {
//     console.log("Not connected");
//     console.error(err);
// });
// MONGO CONNECTION END ========================

// MIDDLEAWRE =======================
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
// MIDDLEAWRE =======================

// API START =========================
app.use("/api",require("./routes"))
// API END =========================

app.listen(port, () => {
    console.log(`server runing at ${port}`);
});