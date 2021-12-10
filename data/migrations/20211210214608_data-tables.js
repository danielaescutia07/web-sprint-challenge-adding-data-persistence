
exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
        })
        .createTable('resources', table => {
            table.increments('resources_id')
        })
        .createTable('tasks', table => {
            table.increments('tasks_id')
        })
        .createTable('project_resources', table => {
            table.increments('project_resources_id')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project-resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
