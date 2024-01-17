const express = require('express')
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(username == 'user1' && password == 'password1'){
        res.sendFile(__dirname + '/authed.html')
    }
    else{
        res.sendFile(__dirname + '/unauthed.html')
    }
}) 


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})