require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const model = require('./models');

const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 3001;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to Mongodb");
}).catch(err => {
    console.log("Not connected");
    console.error(err);
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


//user
app.use("/api",require("./routes"))

app.listen(port, () => {
    console.log(`server runing at ${port}`);
});