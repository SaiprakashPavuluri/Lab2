const mongoose = require('mongoose');
// import mongoose from 'mongoose';

 const mongoURI ='mongodb+srv://demo:Demotest@cluster0.6t25jd9.mongodb.net/?retryWrites=true&w=majority';

 const connectToMongo =() =>{
    mongoose.connect(mongoURI ,() => {
        console.log("connect to mongo db")
    })
 }
 module.exports= connectToMongo;