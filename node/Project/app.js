require("dotenv").config()
const cors=require('cors')
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const taskRouter=require('./routes/task')
const userRouter=require('./routes/user')
const bodyParser=require('body-parser')
app.use(cors());
app.use(bodyParser.json());
app.use('/task',taskRouter);
app.use('/user',userRouter);
const CONECTION_URL='mongodb+srv://Task:123@cluster0.afhwgg9.mongodb.net/?retryWrites=true&w=majority';
const PORT=5000;
mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));
