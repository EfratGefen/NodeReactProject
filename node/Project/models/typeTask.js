const mongoose=require('mongoose');
const typeTaskSchema=new mongoose.Schema({
typeTaskId:String,
typeTaskName:String
})
module.exports=mongoose.model('TypeTasks',typeTaskSchema)
