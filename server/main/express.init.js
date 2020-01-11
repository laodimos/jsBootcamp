const express = require('express')
const app = express()
const port = 3000

const message ='<h1 style="color:red;">Hello Nick & Nick! </h1> <br> That is just a try to initialise Expressjs <br> Thanks for your attention'

app.get('/', (req, res) => res.send(message))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))