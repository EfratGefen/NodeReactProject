// const tasks = [
//     { id: 1, name: 'efrat', description: 'open project', deadline: '02/08/2004' },
//     { id: 2, name: 'yael', description: 'sing', deadline: '29/08/2004' },
//     { id: 1, name: 'hadas', description: 'gp to a trip', deadline: '10/10/2003' }
// ];
const Tasks=require('../models/task');
exports.getTasksbyPassword = async (req, res) => {
    const { password } = req.params;
    try {
      const tasks = await Tasks.find({password});
      if (!tasks) {
        return res.status(404).json({ message: 'any task not found' });
      }
      res.json(tasks);
    } catch (error) {
      console.error('Failed to get tasks:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };
  
exports.addTasks = async(req, res) => {
    const newTask=await Tasks.create(req.body);
    res.json(newTask);
};
exports.getAllTasks = async(req, res) => {
    const allTask=await Tasks.find();
    res.json(allTask);
};

exports.deleteTaksByTaskId = async(req, res) => {
    const {taskId} = req.params;
    try{
        const deletedTask =await Tasks.findOneAndDelete({taskId});
        if(!deletedTask)
        {
            res.status(404).json({ message: 'task not found' });
        }
        else{
            res.status(200).json({ message: 'task deleted successfully' });
        }
    }
    catch(error) {
        console.error('Failed to dalete task:',error);
        res.status(500).json({message:'Failed to delete task'});
    }
};
exports.updateTaskByTaskId = async(req, res) => {
    const taskId=req.params;
    const description=req.body;
    try{
        const upDateDescription=await Tasks.findOneAndUpdate(
            taskId,
            description,
            { new: true }
        )
        if(!upDateDescription)
        {
            res.status(404).json({message:'task not found'});
        }
        else{
            res.status(200).json({message:'task description update successfully'});
        }
    }
    catch{
        console.error('Failed to update description:',error);
        res.status(500).json('Failed to update description');
    }
}

