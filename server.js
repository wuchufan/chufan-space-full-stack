require('dotenv').config({path:'./config/.env'});
const express = require("express");
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

//connect to MongoDB
connectDB();


//init middleware
app.use(express.json({extended: false }));

app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/send-email',require('./routes/api/send-email'));

if (process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'));
app.get('*',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'client','build','index.html'));

  });
}

app.listen(port, ()=>{
  console.log(`Sever is up at ${port}`);
});
