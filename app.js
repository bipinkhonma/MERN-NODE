const path = require('path')
require('dotenv').config()
const express = require('express')
const app = express()
const connectToDatabase = require('./Database')

connectToDatabase()

app.get('/', (req, res) => {
    res.json({
        message: 'This is home page'
    })
})

app.get('/about', (req, res) => {
    res.json({
        message: 'This is about page'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Node.js project has started on port', PORT)
})



// "mongodb://bipinkhonma:Bipin321@ac-hbhqb06-shard-00-00.esdjrqj.mongodb.net:27017,ac-hbhqb06-shard-00-01.esdjrqj.mongodb.net:27017,ac-hbhqb06-shard-00-02.esdjrqj.mongodb.net:27017/?ssl=true&replicaSet=atlas-pq9h24-shard-0&authSource=admin&retryWrites=true&w=majority"
