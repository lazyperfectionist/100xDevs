const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require("./db")
const cors = require('cors')


const app = express();
const port = 3000;

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.get('/todos', async (req, res) => {
    const todos = await todo.find({})
    return res.json({
        todos
    })
})

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent wrong inputs!!!",
            parsedPayload : parsedPayload
        })
        return; 
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        message: "ToDo Created <)"
    })

})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent wrong inputs!!!"
        })
        return;
    }
    await todo.update({
        _id: req.body.id    
    }, {
        completed: true
    })
    res.json({
        message: "Marked as Completed!!"
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})