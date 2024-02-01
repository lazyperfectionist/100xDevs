const express = require('express')
const {createTodo, updateTodo} = require('./types')

const app = expres();
const port = 3000;

app.use(express.json())

app.get('/todos',(req,res)=>{
})

app.post('/todos',(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message : "You sent wrong inputs!!!"
        })
        return;
    }
    
})

app.put('/completed',(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message : "You sent wrong inputs!!!"
        })
        return;
    }
})
 
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})