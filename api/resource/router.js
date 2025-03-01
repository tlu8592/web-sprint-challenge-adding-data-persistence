// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');
const db = require('../../data/dbConfig');

router.get('/', (req, res) => {
    Resource.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(error => {
            res.status(404).json({
                message: "no resources"
            });
        })
})

router.post('/', async (req, res) => {
    try {
        const newResource = await Resource.addNewResource({
            resource_name: req.body.resource_name,
            resource_description: req.body.resource_description
        });
        res.status(201).json({ resource_name: newResource[0].resource_name });
    } catch (err) {
        res.status(500).json({
             message: "error creating resource"
        });
    }
})

module.exports = router;