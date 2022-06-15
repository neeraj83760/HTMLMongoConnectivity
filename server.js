const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res)=>{

res.send("Express is working fine!!!")

})

app.listen(3000, function(){

    console.log("sever is running on port 3000")

})