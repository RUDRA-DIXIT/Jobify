const express= require('express');
const mongoose= require('mongoose');
const app= express();
const morgan= require('morgan');
const bodyparser= require('body-parser');
require('dotenv/config');
var cors = require('cors');

//Database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Database connected successfully');
}).catch((err)=>{
    console.log('Database connection failed');
    console.log(err);
});
//port
const port= process.env.PORT || 9000; 
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});