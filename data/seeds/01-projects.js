const sampleProjects = [
  {
    project_name: "API #1",
    project_description: "create endpoints for /api/items"
  },
  {
    project_name: "Database #2"
  },
  {
    project_name: "Authentication #3",
    project_description: "add authentication to a backend app"
  }
]


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(sampleProjects);
    });
};
