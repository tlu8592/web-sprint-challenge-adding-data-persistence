// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res) => {
    Project.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(404).json({
                message: "no projects found"
            })
        })
})

router.post('/', async (req, res) => {
    try {
        const { project_name, project_description, project_completed } = req.body;
        if (!project_name) {
            res.status(400).json({
                message: "name of project is needed"
            });
        } else {
            const newProject = await Project.addNewProject({
                project_name: project_name,
                project_description: project_description,
                project_completed: project_completed
            });
            res.status(200).json(newProject);
        }
    } catch (err) {
        res.status(500).json({
            message: "error adding project"
        });
    }
})

module.exports = router;