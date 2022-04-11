// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects() {
    return db('projects')
}

function getProjectById(project_id) {
    return db('projects')
        .where('project_id', project_id)
        .first();
}

function addNewProject(project) {
    return db('projects').insert(project)
        .then(([project_id]) => getProjectById(project_id));
}

module.exports = {
    getProjects,
    getProjectById,
    addNewProject
}