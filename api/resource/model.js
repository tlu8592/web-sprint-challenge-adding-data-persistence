// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResources() {
    return db('resources');
}

function getResourceById(resource_id) {
    return db('resources').where('resource_id', resource_id)
}

function addNewResource(resource) {
    return db('resources').insert(resource)
        .then(([resource_id]) => getResourceById(resource_id))
}

module.exports = {
    getResources,
    getResourceById,
    addNewResource
}