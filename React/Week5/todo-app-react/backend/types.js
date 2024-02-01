const zod = require('zod')

const createTodo = zod.object({
    titleSchema: zod.string(),
    descriptionScehma: zod.string(),
})

const updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo:updateTodo
}