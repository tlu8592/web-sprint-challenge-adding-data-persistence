// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', async (req, res) => {
    // Project.getProjects()
    //     .then(projects => {
    //         res.json(projects);
    //     })
    //     .catch(err => {
    //         res.status(404).json({
    //             message: "no projects found"
    //         })
    //     })
    const projects = await Project.getProjects();
    projects.forEach(project => {
        if (project.project_completed === 0) {
            project.project_completed = false;
        } else {
            project.project_completed = true;
        }
    })
    console.log(projects);
    res.json(projects);
})

router.post('/', async (req, res) => {
    try {
        // const { project_name, project_description } = req.body;
        // if (!project_name) {
        //     res.status(400).json({
        //         message: "name of project is needed"
        //     });
        // } else {
        //     const newProject = await Project.addNewProject({
        //         project_name: project_name,
        //         project_description: project_description,
        //         project_completed: project_completed
        //     });
        //     res.status(200).json(newProject);
        // }
        const newProject = await Project.addNewProject(req.body);
        console.log(newProject);
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