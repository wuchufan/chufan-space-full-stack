const express = require("express");
const app = express();

app.get('/test',(req,res)=>{

  console.log('reached home page');
  res.send("hello");
});

app.listen(5000, ()=>{
  console.log("Sever is up at 5000");
});
