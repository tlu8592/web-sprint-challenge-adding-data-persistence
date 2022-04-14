// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

router.get('/', async (req, res) => {
    const tasks = await Task.getTasks();
    if (!tasks) {
        return [];
    } else {
        tasks.forEach(task => {
            if (task.task_completed === 0) {
                task.task_completed = false
            } else {
                task.task_completed = true
            }
        })
        res.json(tasks);
    }
})

router.post('/', async (req, res) => {
    try {
        const newTask = await Task.addNewTask(req.body);
        if (newTask.task_completed === 0) {
            newTask.task_completed = false
        } else {
            newTask.task_completed = true
        }
        res.status(201).json(newTask);
        
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;