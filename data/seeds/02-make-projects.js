const projects = [
    { project_name: 'Paint Wall', project_completed: false},
    { project_name: 'Coffee Station', project_completed: false},
    { project_name: 'Custom Mirror', project_completed: false}
]

const resources = [
    { resource_name: 'paint'},
    { resource_name: 'old mirror'},
    { resource_name: 'nails'},
    { resource_name: 'hammer'},
    { resource_name: 'shelves'},
    { resource_name: 'paint roller'},
    { resource_name: 'creativity'}
]

const tasks = [
    //*Paint Wall
    { task_description: 'Use paint roller to paint', task_completed: false, project_id: 1 },
    { task_description: 'Leave to dry for 2 hours', task_notes: 'No fans!', task_completed: false, project_id: 1 },
    //*Coffee Station
    { task_description: 'Use hammer to put nails on wall', task_completed: false, project_id: 2 },
    { task_description: 'Mount shelves on wall', task_completed: false, project_id: 2 },
    //*Custom Mirror
    { task_description: 'Use your creativity', task_completed: false, project_id: 3 },
    { task_description: 'Find old mirror and customize it', task_completed: false, project_id: 3 }
]

const project_resources = [
    //*Paint Wall
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 6 },
    //*Coffee Station
    { project_id: 2, resource_id: 3 },
    { project_id: 2, resource_id: 4 },
    { project_id: 2, resource_id: 5 },
    //*Custom Mirror
    { project_id: 3, resource_id: 2 },
    { project_id: 3, resource_id: 7 }

]


exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}