require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-8k7im.mongodb.net/blogDB`,
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

// if (process.env.NODE_ENV === 'production'){
  // app.use(express.static('client/build'));



app.get('/api/posts',(req,res)=>{

  composeModel.find({}, function(err, foundCompose) {
    if (!err) {
      let invOrder = foundCompose.reverse();
      res.send(invOrder);
      }
    }
  )
});

app.get('/api/posts/:id',(req,res)=>{

  composeModel.findById({
  _id: req.params.id
}, function(err, foundCompose) {
  if (!err){
    res.send({
      publishTitle: foundCompose.composeTitle,
      publishBodyLB: foundCompose.composeLBBody
      });
  } else {
    console.log(err);
    }

  });
});

if (process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'));
app.get('*',(req,res)=>{
    console.log(req.url);
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));

  });
}

app.listen(port, ()=>{
  console.log(`Sever is up at ${port}`);
});
