const sampleResources = [
  {
    resource_name: "Creating APIs",
    resource_description: "gives step-by-step instructions to create APIs"
  },
  {
    resource_name: "Backend Authentication"
  },
  {
    resource_name: "Database Management"
  }
]


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(sampleResources);
    });
};
