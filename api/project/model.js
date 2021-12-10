function getAll() {
    return Promise.resolve('get all projects working!')
}

function create() {
    return Promise.resolve('create new project working!')
}

module.exports = {
    getAll,
    create
}