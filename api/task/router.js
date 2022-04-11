// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

router.get('/', async (req, res) => {
    const tasks = await Task.getTasks();
    if (!tasks) {
        return [];
    } else {
        res.json(tasks);
    }
})

router.post('/', async (req, res) => {
    try {
        const { task_description, project_id, task_completed, task_notes } = req.body;
        if (!task_description) {
            res.status(400).json({
                message: "please provide tasks description"
            });
        } else if (!project_id) {
            res.status(400).json({
                message: "project id missing"
            });
        } else if (typeof project_id !== number) {
            res.status(400).json({
                message: "invalid project id"
            });
        } else {
            const newTask = await Task.addNewTask({
                task_description: task_description,
                task_notes: task_notes,
                task_completed: task_completed,
                project_id: project_id
            });

        }
    } catch (err) {
        res.status(500).json({
            message: "error creating task"
        })
    }
})

module.exports = router;