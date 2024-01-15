const mongoose = require('mongoose');
const express = require("express"); 
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

mongoose.connect('mongodb+srv://admin:HckSY0ASvwNSRVab@cluster0.sywpqzt.mongodb.net/newTesDB')

const app = express();
app.use(express.json());

// Making schema for database : 
const User = mongoose.model('users', {
    username: String,
    password: String,
    name: String
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = User.findOne({ username: username });
    console.log(existingUser);
    if (!existingUser) {
        const user = new User({
            name: name,
            username: username,
            password: password
        })
        user.save();
        res.json({
            message: "Done !!!"
        })
    }
    res.status(400).json({
        message : "User exist already please signin!!! "
    })

})

function userExists(username, password){

}

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username:username,password:password});
    if(!user){
        return res.json({
            message :  "User not found"
        })
    }
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    })
});


app.get('/users', function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS
        })
    }
    catch (err) {
        return res.status(403).json({
            "msg": "Error occured"
        })
    }
})

app.listen(3000, () => {
    console.log('Started');
});