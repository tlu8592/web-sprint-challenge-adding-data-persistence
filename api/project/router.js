// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', async (req, res) => {
    const projects = await Project.getProjects();
    projects.forEach(project => {
        if (project.project_completed === 0) {
            project.project_completed = false;
        } else {
            project.project_completed = true;
        }
    })
    res.json(projects);
})

router.post('/', async (req, res) => {
    try {
        const newProject = await Project.addNewProject(req.body);
        if (newProject.project_completed === 0) {
            newProject.project_completed = false
        } else {
            newProject.project_completed = true
        }
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({
            message: "error adding project"
        });
    }
})

module.exports = router;