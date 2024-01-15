const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Home page')
})
app.get('/mkc', (req, res) => {
    // res.json({
    //   name:"shivansh",
    //   id:'001'
    // })
    res.send("<b>zamane ki Mkc</b>")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})