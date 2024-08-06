const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    password: String,
    taskId:String,
    typeTaskId:String,
    name: String, 
    description: String, 
    deadline: Date
   
})
module.exports=mongoose.model('Tasks',taskSchema)
