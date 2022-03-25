var express = require('express');
var app = express();

const axios = require("axios");
const port = 5050;
const universityRoute = require('./src/routes/universityRoute');
app.set("view engine", "ejs");



app.use('/', universityRoute);
app.listen(port, () => {

    console.log(`Now listening on port ${port}`);

});