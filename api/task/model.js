// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks() {
    return db('tasks');
}

function getTaskById(task_id) {
    return db('tasks').where('task_id', task_id).first();
}

function addNewTask(task) {
    return db('tasks').insert(task)
        .then(([task_id]) => getTaskById(task_id));
}

module.exports = {
    getTasks,
    addNewTask
}