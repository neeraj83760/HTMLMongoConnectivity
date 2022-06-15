const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect("mongodb+srv://neeraj:Ramswarup123@cluster0.vu4bt.mongodb.net/blogDB?retryWrites=true&w=majority");

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://neeraj:ieLEPqs6451Bgvnr@cluster0.vu4bt.mongodb.net/blogDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("blogDB").collection("notesDB");
//   // perform actions on the collection object
//   client.close();
// });

// Create a data schema

const notesSchema = {

    title: String,
    content:String
}

//  Now we will create a model called Note

const Note = mongoose.model("Note", notesSchema);



app.get("/", (req, res)=>{

res.sendFile(__dirname + "/index.html")

})


app.post("/", (req, res)=>{

let newNode = new Note({

    title:req.body.title,
    content:req.body.content
});

   newNode.save();
   res.redirect("/");
})

app.listen(3000, function(){

    console.log("sever is running on port 3000")

})