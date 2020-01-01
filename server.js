const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


mongoose.connect("mongodb+srv://chufan-wu:myhappyday@cluster0-8k7im.mongodb.net/blogDB",
  { useUnifiedTopology: true ,useNewUrlParser: true});


app.use(bodyParser.urlencoded({
  extended: true
}));

//mongoose schema
const composeSchema = {
  composeTitle: String,
  composeBody: String,
  composeLBBody: Array

};

const composeModel = mongoose.model("blog", composeSchema);

app.get('/posts',(req,res)=>{
  composeModel.find({}, function(err, foundCompose) {
    if (!err) {
      res.send(foundCompose);
      }
    }
  )
});
// 
// app.get('/posts/:id',(req,res)=>{
//   composeModel.findById({
//   _id: req.params.post
// }, function(err, foundCompose) {
//   // console.log(foundCompose);
//   res.send({
//     publishTitle: foundCompose.composeTitle,
//     publishBodyLB: foundCompose.composeLBBody
//     });
//   });
// });

app.listen(5000, ()=>{
  console.log("Sever is up at 5000");
});
