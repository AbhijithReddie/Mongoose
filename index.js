const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/JpmTraining').then(()=>console.log('Connection Successful'));

const studentRoutes = require('./router/student.routes');
app.use("/api/student",studentRoutes)

app.get('/',(req,res)=>{
    res.status(200).send("Home Page");
})
app.listen(port,()=>console.log(`server started at port number ${port}`));