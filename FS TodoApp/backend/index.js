const express = require('express')
const jwt = require("jsonwebtoken");
const { userSchemazod, todoSchemazod } = require('./types')


const { User, Todo } = require("./db")


const app = express();
app.use(express.json());

const port = 3000;
const secret = "SECRETCODE";


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/signup', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = new User({
            username, password
        })
        const userPayload = userSchemazod.safeParse(user);
        console.log(userPayload);
        if (userPayload.success) {
            await user.save();
            res.json({
                message: "User created"
            })
        }
        else {
            res.json({
                error: userPayload
            })
        }
    }
    catch (err) {
        return res.json({
            message: err.message
        })
    }
})


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ message: "User not found !!" })
        }
        if (!(password === user.password)) {
            return res.json({ message: "Invalid Password!!!!!" })
        }
        const token = jwt.sign({ username: username }, secret);
        res.json({
            token: token
        })
    }
    catch (err) {
        return res.json({
            message: err.message
        })
    }
})

// Middleware for jwt authentication :
function jwtauth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token is required" });
    }
    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid Token" });
        }
        else {
            req.username = decoded.username;
            const username = decoded.username
            const user = await User.findOne({ username: username });
            req.userId = user._id;
            next();
        }
    })
}

// Getting all todos ::::
app.get('/todos', jwtauth, async (req, res) => {
    try {
        const userId = req.userId;
        const todos = await Todo.find({ user: userId })
        return res.json({
            todos
        })
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }

});

// Adding Todos ::
app.post('/todos', jwtauth, async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const userId = req.userId;
        const todo = new Todo({ title, description, completed, user: userId });
        const todopayload = todoSchemazod.safeParse(todo);
        if (todopayload.success) {
            await todo.save();
            return res.json({
                message: `Todo Created !`
            })
        }
        else {
            return res.json({
                todo: todo,
                message: todopayload
            })
        }
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
})


// Update Todo ::
app.put('/todos/:id', jwtauth, async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
        if (!updatedTodo) {
            return res.status(404).send("Todo not found");
        }
        return res.json(updatedTodo);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error updating Todo");
    }
});

app.delete('/todos/:id', jwtauth, async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id, { new: true });
        if (!deletedTodo) {
            return res.status(404).send("Todo not found");
        }
        return res.json(deletedTodo);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error Deleting Todo");
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})