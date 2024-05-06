const mongoose = require("mongoose")

const dburl = "mongodb+srv://admin:msR4dJhkKxhs9S7J@cluster0.3lxwknv.mongodb.net/ToDoAppDataBase";

mongoose.connect(dburl).then(() => {
    console.log("DB Connected!!");
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }

})

const User = mongoose.model('User', userSchema);

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Todo = mongoose.model('Todo', todoSchema);


module.exports = {
    User, Todo
}