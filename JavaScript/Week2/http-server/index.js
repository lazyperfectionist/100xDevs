const express = require('express')
const port = 3000
const app = express();

app.use(express.json());


// function sum(n){
//     return (parseInt(n)*parseInt(n));
// }
// app.get('/',function(req,res){
//     const s = sum(req.query.n);
//     res.send(s.toString());
// })
// app.listen(port,function(){
//     console.log(`App started on port ${port}`);
// });

const users = [{
    id: 1,
    name: "Shivansh",
    company: "Wipro",
    Experience: 1,
    age: 22
}, {
    id: 2,
    name: "Dhruv",
    company: "Microsoft",
    Experience: 2,
    age: 21
}, {
    id: 3,
    name: "Yadav ji",
    company: "No Company",
    Experience: 0,
    age: 26
}, {
    id: 4,
    name: "Mayank",
    company: "Accenture",
    Experience: 2,
    age: 23
}]

app.get('/display', (req, res) => {
    const id = req.query.id;
    let user = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == id) {
            {
                user = users[i];
            }
        }
    }
    if (user != -1) {
        res.json(user);
    }
    res.send("User not found");
})

app.put('/update', (req, res) => {
    let id = req.body.id;
    let experience = req.body.Experience;
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == id) {
            {
                users[i]['Experience'] = experience;
            }
        }
    }
    res.send("Done!")
})

app.post('/addPackage', (req, res) => {
    const id = req.body.id;
    const package = req.body.package;
    let index = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] === id) {
            index = i;
            // console.log('index found',+ id + " " + users[i]['id']);
        }
    }
    users[index].package = package;
    console.log(users[index]);
    console.log(users[index].package);
    res.json('Done');
})

app.delete('/delete', (req, res) => {
    const id = req.body.id;
    let newusers = [];
    for (let i = 0; i < users.length; i++) {

    }
})

app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});