//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/<nameDB>", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

// const postSchema = {
//   title: String,
//   content: String
// };
//
// const Post = mongoose.model("Post", postSchema);

// for app.get => res.render

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
