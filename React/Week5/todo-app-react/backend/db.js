const mongoose = require("mongoose")

dburl = "mongodb+srv://admin:HckSY0ASvwNSRVab@cluster0.sywpqzt.mongodb.net/ReactTodoDB"
mongoose.connect(dburl).then(()=>{
    console.log("Db Connected !!");
})

const todoSchema = mongoose.Schema({
    title:String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos",todoSchema);
module.exports ={
    todo
}