const express=require('express');
const router=express.Router();
const Task=require("../models/task");
const{addTasks,getAllTasks,getTasksbyPassword,deleteTaksByTaskId,updateTaskByTaskId}=require('../controllers/task');
// router.get('/',getAllTasks);
router.get('/:password',getTasksbyPassword);
router.post('/',addTasks);
router.delete('/:taskId',deleteTaksByTaskId);
router.put('/:taskId',updateTaskByTaskId);
module.exports=router;

