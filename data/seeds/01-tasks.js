const sampleTasks = [
  {
    task_description: "install dependencies",
    project_id: 1
  },
  {
    task_description: "create migrations and seeds",
    task_notes: "create a schema design with migrations for the ingredients and recipe tables",
    project_id: 2
  },
  {
    task_description: "install bcryptjs",
    project_id: 3
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(sampleTasks);
    });
};
