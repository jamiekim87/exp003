const express = require('express')

const app = express()

app.get('/test', (req, res) => {
    console.log(req.query.n)
    res.send(`Hello ${req.query.n}!`)
})

app.get('/name/:n', (req, res) => {
    console.log(req.params.n)
    res.send(`Hello ${req.params.n}!`)
})

app.listen(3000)
