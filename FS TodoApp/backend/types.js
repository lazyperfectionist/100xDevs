const zod = require('zod')

const userSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean(),
    user: zod.object({})
})

module.exports = {
    userSchemazod: userSchema,
    todoSchemazod: todoSchema
}