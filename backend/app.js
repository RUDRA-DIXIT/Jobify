const express= require('express');
const mongoose= require('mongoose');
const app= express();
const morgan= require('morgan');
const bodyparser= require('body-parser');
require('dotenv/config');
var cors = require('cors');
const cookieParser= require('cookie-parser');
const errorHandler= require('./middleware/error');

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

//middlewares
app.use(morgarn('dev'));
app.use(bodyparser.json({limit: '5mb'}));
app.use(bodyparser.urlencoded({limit: '5mb', extended: true}));
app.use(cookieParser());
app.use(cors());

// error middleqware
app.use(errorHandler);

//port
const port= process.env.PORT || 9000; 
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});