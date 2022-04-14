// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db('projects');
    return projects;
}

function getProjectById(project_id) {
    return db('projects')
        .where('project_id', project_id)
        .first();
}

async function addNewProject(project) {
    const projectId = await db('projects').insert(project)
    return db('projects').where('project_id', projectId).first()
}

module.exports = {
    getProjects,
    getProjectById,
    addNewProject
}