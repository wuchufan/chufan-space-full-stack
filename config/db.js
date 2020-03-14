const mongoose = require('mongoose');



const connectDB = async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGO_URL}`,{ useUnifiedTopology: true ,useNewUrlParser: true});
    await mongoose.set('useFindAndModify', false);
    console.log('MongoDB connected');
  } catch(err){
    console.log(err);
    //exit when fail
    process.exit(1);
  }
}



module.exports = connectDB;
